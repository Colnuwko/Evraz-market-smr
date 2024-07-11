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
