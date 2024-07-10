import { Product } from "./producct";

export interface CategoryInt {
  id: number;
  img: string;
  category: Category;
  subCategories: SubCategoryDetail[];
  title: CategoryR;
}

export interface SubCategoryDetail {
  subCategory: SubCategory;
  price: number;
  title: SubCategoryR;
  products: Product[];
}

export const categoryTitles: { [key: string]: string } = {
  armatura: 'Арматурный прокат',
  listy: 'Листовой прокат',
  metiznaya_produktsiya: 'Метизная продукция',
  truby: 'Трубный прокат',
  fasonnyy_prokat: 'Фасонный прокат',
};

export enum Category {
  ARMATURA = 'armatura',
  LISTY = 'listy',
  MITIZ = 'metiznaya_produktsiya',
  TRUBY = 'truby',
  PROKAT = 'fasonnyy_prokat',
}

export enum SubCategory {
  ARMATURA_GLADKAYA = 'armatura_gladkaya',
  ARMATURA_RIFLENAYA = 'armatura_riflenaya',
  KATANKA = 'katanka',
  PROVOLKA = 'provolka',
  LIST_GORKAT = 'list_gorkat',
  TRUBA_PROFILNAYA = "truba_profilnaya"
}

export const subCategoryTitles: { [key: string]: string } = {
  armatura_gladkaya: 'Арматура гладкая',
  armatura_riflenaya: 'Арматура рифленая',
  katanka: 'Катанка',
  provolka: 'Проволка',
  list_gorkat: 'Лист горячекатанный',
};

export enum CategoryR {
  ARMATURA = 'Арматурный прокат',
  LISTY = 'Листовой прокат',
  MITIZ = 'Метизная продукция',
  TRUBY = 'Трубный прокат',
  PROKAT = 'Фасонный прокат',
}

export enum SubCategoryR {
  ARMATURA_GLADKAYA = 'Арматура гладкая',
  ARMATURA_RIFLENAYA = 'Арматура рифленая',
  KATANKA = 'Катанка',
  PROVOLKA = 'Проволка',
  LIST_GORKAT = 'Лист горячекатанный',
  TRUBA_PROFILNAYA = "Труба профильная"
}


