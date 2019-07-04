import { Component, OnInit } from '@angular/core';
import { SpotifySearchService } from '../spotify-search.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  result: Object;

  constructor(
    private spotify: SpotifySearchService,
    private router: Router,
    private route: ActivatedRoute,
  ) {
    this.route.queryParams
      .subscribe(params => { this.query = params['query'] || ''; });
  }

  ngOnInit() {
    this.search();
  }

  onSubmit(query: string) {
    console.log('onSubmit', query)
    this.router.navigate(['search'], { queryParams: { query }})
      .then(_ => this.search());
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
