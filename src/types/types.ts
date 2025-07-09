export interface PexelsPhoto {
  id: number;
  alt: string;
  src: {
    original: string;
    large2x: string;
    large: string;
    medium: string;
    small: string;
    portrait: string;
    landscape: string;
    tiny: string;
  };
}

export interface PexelsApiResponse {
  page: number;
  per_page: number;
  photos: PexelsPhoto[];
  total_results: number;
}

export interface Photo {
  id: number;
  alt: string;
  url: string;
}

export interface GalleryState {
  photosByPage: Record<number, Photo[]>;
  loading: boolean;
  error: string | null;
  currentPage: number;
}
