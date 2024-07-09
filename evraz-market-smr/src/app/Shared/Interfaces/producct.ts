import { Category, SubCategory } from "./category";

export interface Product {
    id: number;
    name: string;
    price: number;
    category: Category;
    subCategory: SubCategory;
  }

  export interface Armatura extends Product {
    diameter: number;
  }
  
  export interface ProfilePipe extends Product {
    width: number;
    height: number;
    thickness: number;
  }
  