import { Product } from "./producct";

export interface CategoryInt {
  id: number;
  img: string;
  subCategories: SubCategoryDetail[];
  title: CategoryR;
  iconimg: string;
}

export interface SubCategoryDetail {
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
  PROFLIST = 'proflist',
  SETKA = 'setka'
}

export enum SubCategory {
  ARMATURA_GLADKAYA = 'armatura_gladkaya',
  ARMATURA_RIFLENAYA = 'armatura_riflenaya',
  KATANKA = 'katanka',
  PROVOLKA = 'provolka',
  LIST_GORKAT = 'list_gorkat',
  SHVELLER = 'shveller',
  TRUBA_PROFILNAYA = "truba_profilnaya",
  TRUBA_ELECTROSVARNAYA = "truba_elecrosvarnaya",
  TRUBA_BESSHOVNAYA = "truba_besshovnaya",
  TRUBA_VGP = "truba_vgp",
  TRUBA_TEMPO = "truba_tempo",
  METALLOCHEREPICA = "metallocherepica",
  PROFNASTIL = 'profnastil',
  DOBORNIE_ELEMENTY = "dobornie_elementy",
  SAMOREZI = 'samorezi',
  BALKA = 'balka',
  UGOLOK = 'ugolok',
  SETKA_KLADOCHNAYA = 'setka_kladochnaya',

}


export enum CategoryR{
  ARMATURA = 'Арматурный прокат',
  LISTY = 'Листовой прокат',
  MITIZ = 'Метизная продукция',
  TRUBY = 'Трубный прокат',
  PROKAT = 'Фасонный прокат',
  PROFLIST = 'Кровельные материалы',
  SETKA = 'Cетки'
}

export enum SubCategoryR {
  ARMATURA_GLADKAYA = 'Арматура гладкая',
  ARMATURA_RIFLENAYA = 'Арматура рифленая',
  KATANKA = 'Катанка',
  PROVOLKA = 'Проволка',
  LIST_GORKAT = 'Лист горячекатанный',
  SHVELLER = 'Швеллер',
  TRUBA_PROFILNAYA = "Труба профильная",
  TRUBA_ELECTROSVARNAYA = "Труба электросварная",
  TRUBA_BESSHOVNAYA = "Труба бесшовная",
  TRUBA_VGP = "Труба ВГП",
  TRUBA_TEMPO = "Труба ТЭМПО",
  METALLOCHEREPICA = "Металлочерепица",
  PROFNASTIL = 'Профнастил',
  DOBORNIE_ELEMENTY = "Доборные элементы",
  SAMOREZI = 'Саморезы',
  BALKA = 'Балка двутавровая',
  UGOLOK = 'Уголок',
  SETKA_KLADOCHNAYA = 'Сетка кладочная'
}


