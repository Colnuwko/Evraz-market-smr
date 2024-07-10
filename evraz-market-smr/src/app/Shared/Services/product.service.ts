import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product, ProfilePipe } from '../Interfaces/producct';
import { Category, CategoryInt } from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private jsonUrl = 'assets/data.json';


  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryInt[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl);
  }

  findProduct(category: string, subCategory: string, productId: number): Observable<Product | undefined> {
    return this.getCategories().pipe(
      map(categories => {
        for (const cat of categories) {
          if (cat.category === category) {
            for (const subCat of cat.subCategories) {
              if (subCat.subCategory === subCategory) {
                return subCat.products.find(product => product.id === productId);
              }
            }
          }
        }
        return undefined;
      })
    );
  }

  getProductsByCategoryAndSubCategory(category: string, subCategory: string): Observable<Product[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const selectedCategory = categories.find(cat => cat.category === category);
        if (selectedCategory) {
          const selectedSubCategory = selectedCategory.subCategories.find(sub => sub.subCategory === subCategory);
          if (selectedSubCategory) {
            return selectedSubCategory.products;
          }
        }
        return [];
      })
    );
  }

  getProfilePipeProductsByHeight(categoryId: string, subCategoryId: string, height: number): Observable<{ widths: number[], thicknesses: number[] }> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => cat.category === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => sub.subCategory === subCategoryId);
          if (subCategory) {
            const widthsSet = new Set<number>();
            const thicknessesSet = new Set<number>();

            subCategory.products
              .filter(product => (product as ProfilePipe).height === height)
              .forEach(product => {
                widthsSet.add((product as ProfilePipe).width);
                thicknessesSet.add((product as ProfilePipe).thickness);
              });

            return {
              widths: Array.from(widthsSet),
              thicknesses: Array.from(thicknessesSet)
            };
          }
        }
        return { widths: [], thicknesses: [] };
      })
    );
  }

  getUniqueHeightsByCategoryAndSubCategory(categoryId: string, subCategoryId: string): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => cat.category === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => sub.subCategory === subCategoryId);
          if (subCategory) {
            const heights = subCategory.products
              .filter(product => (product as ProfilePipe).height !== undefined)
              .map(product => (product as ProfilePipe).height);

            return Array.from(new Set(heights)); // Возвращаем уникальные значения высот
          }
        }
        return [];
      })
    );
  }
}
