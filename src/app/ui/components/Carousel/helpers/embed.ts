export interface Embed {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  attributes: DatumAttributes;
  id: number;
}

export interface DatumAttributes {
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
  canal: Canal;
  id: number;
  url: null;
}

export interface Canal {
  data: Data;
}

export interface Data {
  attributes: DataAttributes;
  id: number;
}

export interface DataAttributes {
  createdAt: Date;
  titulo: string;
  updatedAt: Date;
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
