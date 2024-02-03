export interface Calendar {
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
  equipo_a: EquipoA;
  equipo_b: EquipoA;
  imagen_equipos: EquipoA;
  opciones_video: OpcionesVideo;
  partido: string;
  updatedAt: Date;
}

export interface EquipoA {
  data: Data | null;
}

export interface Data {
  attributes: DataAttributes;
  id: number;
}

export interface DataAttributes {
  alternativeText: null;
  caption: null;
  createdAt: Date;
  ext: string;
  formats: null;
  hash: string;
  height: number;
  mime: string;
  name: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  size: number;
  updatedAt: Date;
  url: string;
  width: number;
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
