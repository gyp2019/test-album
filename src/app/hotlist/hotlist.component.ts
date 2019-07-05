import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { VideoCategory, KtubeVideo } from '../video.model';
import { Pagination } from '../pagination.model';

@Component({
  selector: 'app-hotlist',
  templateUrl: './hotlist.component.html',
  styleUrls: ['./hotlist.component.css']
})
export class HotlistComponent implements OnInit {
  videos: KtubeVideo[];
  pagination: Pagination;

  constructor(
    private service: SearchService,
  ) { }

  ngOnInit() {
    this.getBestVideos();
  }

  getVideos() {
    this.service.getVideos("view").subscribe(
      (result) => {
        this.videos = result.contents;
        this.pagination = result.pagination;
      },
    );
  }

  getBestVideos() {
    this.service.getBestVideos(VideoCategory.Last30Days).subscribe(
      (result) => {
        this.videos = result.contents;
        this.pagination = result.pagination;
      },
    );
  }

}
