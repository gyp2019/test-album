import { KtubeVideo } from './video.model';
import { Pagination } from './pagination.model';

export interface ResultList {
  contents: KtubeVideo[];
  pagination: Pagination;
}
