export interface RootObject {
  data: Data;
  meta: Meta;
}

export interface Data {
  attributes: Attributes;
  id: number;
}

export interface Attributes {
  SEO: SEO;
  createdAt: Date;
  updatedAt: Date;
}

export interface SEO {
  canonicalURL: string;
  id: number;
  keywords: string;
  metaDescription: string;
  metaRobots: string;
  metaTitle: string;
  metaViewport: string;
  structuredData: string;
}

export interface Meta {}
