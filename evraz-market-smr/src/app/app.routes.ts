import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { CategoryPageComponent } from './Pages/category-page/category-page.component';
import { ProductPageComponent } from './Pages/product-page/product-page.component';
import {BasketComponent} from "./Pages/basket/basket.component";
import {AboutComComponent} from "./Pages/about-com/about-com.component";

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'category/:categoryId', component: CategoryPageComponent },
  { path: 'category/:categoryId/subCategory/:subCategoryId', component: CategoryPageComponent },
  { path: 'category/:categoryId/subCategory/:subCategoryId/:productId', component: ProductPageComponent },
  { path: 'basket', component: BasketComponent },
  { path: 'about', component: AboutComComponent},
  { path: '**', redirectTo: '' }
];
