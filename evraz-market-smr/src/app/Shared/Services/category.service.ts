import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoryInt } from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<CategoryInt[]> {
    return this.http.get<CategoryInt[]>(this.dataUrl);
  }

  getCategoryById(id: string): Observable<CategoryInt | undefined> {
    return this.http.get<CategoryInt[]>(this.dataUrl).pipe(
      map(categories => categories.find(category => category.category === id))
    );
  }

  getSubCategoryById(categoryId: string, subCategoryId: string): Observable<CategoryInt | undefined> {
    return this.http.get<CategoryInt[]>(this.dataUrl).pipe(
      map(categories => {
        const category = categories.find(category => category.category === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => sub.subCategory === subCategoryId);
          return subCategory ? { ...category, subCategories: [subCategory] } : undefined;
        }
        return undefined;
      })
    );
  }
  getCategoriesByIds(ids: number[]): Observable<CategoryInt[]> {
    return this.http.get<CategoryInt[]>(this.dataUrl).pipe(
      map(categories => categories.filter(category => ids.includes(category.id)))
    );
  }
}
