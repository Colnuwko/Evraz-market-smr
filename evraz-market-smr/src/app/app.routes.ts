import { Routes } from '@angular/router';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { CategoryPageComponent } from './Pages/category-page/category-page.component';
import { SubCategoryPageComponent } from './Pages/sub-category-page/sub-category-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'category/:categoryId', component: CategoryPageComponent },
  { path: 'category/:categoryId/subCategory/:subCategoryId', component: CategoryPageComponent },
];
