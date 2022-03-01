export default interface IProductProps {
  title?: string;
}

export interface IProductDetailProps {
  title?: string;
}

export interface Attribute {
  id: string;
  value: string;
  code: string;
  url_media: string;
  parent_id: string;
  children: ChildAttribute[];
  [key: string]: any;
}

export interface ChildAttribute {
  id: string;
  value: string;
  url_media: string;
  parent_id: string;
  enable: boolean;
}

export interface SelectedAttribute {
  parent: string;
  children: string[];
}