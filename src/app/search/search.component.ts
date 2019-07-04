import { Component, OnInit } from '@angular/core';
import { SpotifySearchService } from '../spotify-search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  result: any[];

  constructor(
    private spotify: SpotifySearchService,
  ) { }

  ngOnInit() {
    this.search();
  }

  onSubmit(query: string) {
    console.log('onSubmit', query)
  }

  search(): void {
    console.log('search', this.query)
    if (!this.query) {
      return;
    }

    this.spotify.searchTrack(this.query)
      .subscribe((res: any) => this.renderResult(res));
  }

  renderResult(res: any) {
    this.result = null;
    if (res && res.tracks && res.tracks.items) {
      this.result = res.tracks.items;
    }
  }

}
