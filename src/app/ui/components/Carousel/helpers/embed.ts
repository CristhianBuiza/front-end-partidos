export interface Embed {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  attributes: Attributes;
  id: number;
}

export interface Attributes {
  createdAt: Date;
  datetime: Date;
  opciones_video: OpcionesVideo;
  partido: string;
  updatedAt: Date;
}

export interface OpcionesVideo {
  id: number;
  id_video: string;
  titulo: string;
  video: Video[];
}

export interface Video {
  id: number;
  url: string;
}

export interface Meta {
  pagination: Pagination;
}

export interface Pagination {
  page: number;
  pageCount: number;
  pageSize: number;
  total: number;
}
