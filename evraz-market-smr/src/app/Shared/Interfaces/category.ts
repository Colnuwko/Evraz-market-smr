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
  id: number;
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
  ARMATURA_GLADKAYA = 'Арматура А1',
  ARMATURA_RIFLENAYA = 'Арматура А3',
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
  SETKA_KLADOCHNAYA = 'Сетка кладочная',

}


