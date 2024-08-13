import {CategoryR, SubCategoryR} from "./category";

export interface Product {
  id: number;
  name: string;
  img: string;
  price: number;
  description?: string;
  type: TypeProduct;
  category: CategoryR;
  subCategory: SubCategoryR;
}

export enum TypeProduct {
  armatura = "armatura",
  profilePipe = "profilePipe",
  proflist = "proflist",
  shveller = "shveller",
  balka = "balka",
  ugolok = "ugolok",
  dobory = "dobory",
  setka = "setka",
  samorezi = "samorezi",
  square = "square",
  wire = "wire",
  stripe = "stripe",
  list = "list"

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
  number: number;
  length: number;
}

export interface Ugolok extends Product {
  width: number;
  thickness: number;
  length: number;
}

export interface Setka extends Product {
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


export interface Square extends Product {
  width: number;
  length: number;
}

export interface Wire extends Product {
  weight: number;
  thickness: number;
}

export interface Stripe extends Product {
  width: number;
  thickness: number;
  length: number;
}

export interface Listy extends Product {
  width: number;
  thickness: number;
  length: number;
  steel: string;
}

