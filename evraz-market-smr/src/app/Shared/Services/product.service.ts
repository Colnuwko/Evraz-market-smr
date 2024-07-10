import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from '../Interfaces/producct';
import { Category, CategoryInt } from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private jsonUrl = 'assets/data.json';
  private json = 'assets/test.json'; // путь к вашему JSON-файлу

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

  // filterByProduct(category: string, subCategory: string, productId: number): Observable<Product | undefined> {

  //   return this.http.get<Product[]>(this.json).pipe(
  //     map(products => products.find(product => {
  //       product.category === category && product.subCategory === subCategory && product.id === productId
  //       return undefined;
  //     }

  //     ))
  //   );
  // }
}
