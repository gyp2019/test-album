export interface Pagination {
  page: number;
  scale: number;
  total: number;
  beginIndex: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  hasNext: boolean;
  hasPrevious: boolean;
  p?: object;
}

/**
  "page": 1,
  "scale": 15,
  "total": 18464,
  "beginIndex": 0,
  "totalPages": 1231,
  "startPage": 1,
  "endPage": 5,
  "hasNext": true,
  "hasPrevious": false
 */
