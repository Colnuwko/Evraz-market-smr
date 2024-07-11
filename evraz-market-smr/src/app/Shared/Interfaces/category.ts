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



export enum Category {
  ARMATURA = 'armatura',
  LISTY = 'listy',
  MITIZ = 'metiznaya_produktsiya',
  TRUBY = 'truby',
  PROKAT = 'fasonnyy_prokat',
  PROFLIST = 'proflist'
}

export enum SubCategory {
  ARMATURA_GLADKAYA = 'armatura_gladkaya',
  ARMATURA_RIFLENAYA = 'armatura_riflenaya',
  KATANKA = 'katanka',
  PROVOLKA = 'provolka',
  LIST_GORKAT = 'list_gorkat',
  SHVELLER = 'shveller',
  TRUBA_PROFILNAYA = "truba_profilnaya",
  METALLOCHEREPICA = "metallocherepica",
  PROFNASTIL = 'profnastil',
  BALKA = 'balka',
  UGOLOK = 'ugolok'
}


export enum CategoryR {
  ARMATURA = 'Арматурный прокат',
  LISTY = 'Листовой прокат',
  MITIZ = 'Метизная продукция',
  TRUBY = 'Трубный прокат',
  PROKAT = 'Фасонный прокат',
  PROFLIST = 'Кровельные материалы'
}

export enum SubCategoryR {
  ARMATURA_GLADKAYA = 'Арматура гладкая',
  ARMATURA_RIFLENAYA = 'Арматура рифленая',
  KATANKA = 'Катанка',
  PROVOLKA = 'Проволка',
  LIST_GORKAT = 'Лист горячекатанный',
  SHVELLER = 'Швеллер',
  TRUBA_PROFILNAYA = "Труба профильная",
  METALLOCHEREPICA = "Металлочерепица",
  PROFNASTIL = 'Профнастил',
  BALKA = 'Балка двутавровая',
  UGOLOK = 'Уголок'
}


