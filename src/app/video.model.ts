export interface KtubeVideo {
  videoId: string;
  title: string;
  description: string;
  duration: number;
  emebedHtml: string;
  publishedAt: number;
  viewCount: number;
  likeCount: number;
  thumbnailDefault: string;
  thumbnailMedium: string;
  thumbnailHigh: string;
  thumbnailStandard: string;
  thumbnailMaxres: string;
  rankViewCount: number;
  idolKey: string;
  videoKey: string;
}

export type OrderType = "time" | "view"; // 최근 | 조회수

export enum VideoCategory {
  History = "h", // 역대베스트 (조회수5천만 뷰 이상 대상, 아래는 이하 대상)
  Daily = "d", // 일간베스트
  Weekly = "w", // 지난 주간 베스트
  Monthly = "m", // 지난 월간 베스트
  Last7Days = "7d", // 최근 7일 베스트
  Last30Days = "30d", // 최근 30일 베스트
}

export enum FancamCategory {
  Daily = "d",
  Weekly = "w",
  Monthly = "m",
  Last7Days = "7d",
  Last30Days = "30d",
}

export enum ShowChannel {
  MusicBank = 1, // 뮤직뱅크
  MusicCore = 2, // 쇼 음악중심
  Gayo = 3, // 인기가요
  MCountDown = 4, // M 카운트다운
}

export enum KaraokeCategory {
  Daily = "d",
  Weekly = "w",
  Monthly = "m",
}

export type SearchCategory = "video" | "lyric" | "fancam" | "karaoke"; // 동영상 | 가사동영상 | 팬캠 | 노래방
