export interface RootObject {
  data: Datum[];
  meta: Meta;
}

export interface Datum {
  attributes: DatumAttributes;
  id: number;
}

export interface DatumAttributes {
  SEO: SEO;
  createdAt: Date;
  imagen: Imagen;
  titulo: string;
  updatedAt: Date;
  url: string;
}

export interface SEO {
  id: number;
  metaDescription: string;
  metaTitle: string;
  structuredData: null;
}

export interface Imagen {
  data: Data;
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
  formats: Formats;
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

export interface Formats {
  large: Large;
  medium: Large;
  small: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  hash: string;
  height: number;
  mime: string;
  name: string;
  path: null;
  size: number;
  url: string;
  width: number;
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
