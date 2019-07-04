import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifySearchService {

  constructor(
    private http: HttpClient,
  ) { }

  searchTrack(query: string): Observable<any> {
    const params: string = `q=${query}&type=track`;
    const queryUrl: string = `https://api.spotify.com/v1/search?${params}`;
    return this.http.get(queryUrl).pipe(
      map(res => (<any>res).json()),
    );
  }
}
