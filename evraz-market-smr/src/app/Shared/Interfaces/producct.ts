import { Category, SubCategory } from "./category";

export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;

  category: Category;
  subCategory: SubCategory;
}

export interface Armatura extends Product {
  diameter: number;
  length: number;
}

export interface ProfilePipe extends Product {
  width: number;
  height: number;
  thickness: number;
  length: number;
}

export interface Proflist extends Product {
  width: number;
  thickness: number;
  color: number;
  imgColor: string;
}

export interface Shveller extends Product {
  height: number;
  length: number;
}

export interface Balka extends Product {
  type: number;
  length: number;
}

export interface Ugolok extends Product {
  width: number;
  thickness: number;
  length: number;
}

export interface Setka extends Product{
  width: number;
  length: number;
  size: number;
}
export interface Dobory extends Product {
  length: number;
  thickness: number;
  color: number;
  imgColor: string;
}

export interface Samorezi extends Product {
  length: number;
  thickness: number;
  color: number;
  count: number;
}
