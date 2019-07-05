import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

import { KtubeVideo, OrderType, VideoCategory, FancamCategory } from './video.model';
import { Pagination } from './pagination.model';
import { ResultList } from './result-list.model';

const headers = new HttpHeaders({
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*",
});

@Injectable({
  providedIn: "root"
})
export class SearchService {
  private API_URL = "/api";

  constructor(
    private http: HttpClient,
  ) { }

  getVideo(videoKey: string): Observable<KtubeVideo> {
    const url = `${this.API_URL}/video/${videoKey}`;

    return this.http.get<KtubeVideo>(url, { headers }).pipe(
      tap(_ => this.log(`fetched Video videoKey=${videoKey}`)),
      catchError(this.handleError<KtubeVideo>(`getVideo videoKey=${videoKey}`)),
    );
  }

  getVideos(type: OrderType, page = "1"): Observable<ResultList> {
    const url = `${this.API_URL}/videos`;
    const params = {
      page,
      'p[order]': type
    };

    return this.http.get(url, { headers, params }).pipe(
      map((result: any) => this.parseVideos(result)),
      tap(_ => this.log("fetched Videos")),
      catchError(this.handleError<ResultList>("getVideos")),
    );
  }

  getBestVideos(category: VideoCategory): Observable<ResultList> {
    const url = `${this.API_URL}/bests/${category}`;

    return this.http.get(url, { headers }).pipe(
      map((result: any) => this.parseVideos(result)),
      tap(_ => this.log("fetched BestVideos")),
      catchError(this.handleError<ResultList>("getBestVideos")),
    );
  }

  getFancams(type: OrderType, page = "1") {
    const url = `${this.API_URL}/fancams`;
    const params = {
      page,
      'p[order]': type
    };

    return this.http.get<KtubeVideo[]>(url, { headers, params }).pipe(
      tap(_ => this.log("fetched Fancams")),
      catchError(this.handleError<KtubeVideo>("getFancams")),
    );
  }

  getBestFancams(category: FancamCategory) {
    const url = `${this.API_URL}/fbests/${category}`;

    return this.http.get<KtubeVideo[]>(url, { headers }).pipe(
      tap(_ => this.log("fetched BestVideos")),
      catchError(this.handleError<KtubeVideo>("getBestVideos")),
    );
  }

  getShows() { }

  getLyrics() { }

  getKaraokes() { }

  getBestKaraokes() { }

  getVideosByIdol() { }

  getKaraokesByIdol() { }

  private parseVideos(obj: any): ResultList {
    const { contents, ...pagination } = obj;
    return { contents, pagination };
  }

  private log(message: string): void {
    console.log(message);
  }

  private handleError<T> (operation = "operation", result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      this.log(`${operation} failed: ${error.message}`);

      return of(result as T);
    }
  }
}
