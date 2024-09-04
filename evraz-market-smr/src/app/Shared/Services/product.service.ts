import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {
  Listy,
  Product,
  ProfilePipe,
  Proflist,
  TrubaC,
  Ugolok
} from '../Interfaces/producct';
import {CategoryInt} from '../Interfaces/category';
import {CategoryService} from "./category.service";

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private jsonUrl = 'assets/data.json';


  constructor(private http: HttpClient, private dataService: CategoryService) {
  }

  getCategories(): Observable<CategoryInt[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl);
  }

  findProduct(category: string, subCategory: string, productId: number): Observable<Product | undefined> {
    return this.getCategories().pipe(
      map(categories => {
        for (const cat of categories) {
          if (this.dataService.transliterate(cat.title) === category) {
            for (const subCat of cat.subCategories) {
              if (this.dataService.transliterate(subCat.title) === subCategory) {
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
        const selectedCategory = categories.find(cat => this.dataService.transliterate(cat.title) === category);
        if (selectedCategory) {
          const selectedSubCategory = selectedCategory.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategory);
          if (selectedSubCategory) {
            return selectedSubCategory.products;
          }
        }
        return [];
      })
    );
  }

  getProfilePipeProductsByHeight(categoryId: string, subCategoryId: string, height: number): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const width = subCategory.products
              .filter(product => (product as ProfilePipe).height === height)
              .map(product => (product as ProfilePipe).width);

            return [...new Set(width)];
          }
        }
        return [];
      })
    );
  }

  getProflistProductsByThickness(categoryId: string, subCategoryId: string, typeM: string): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const width = subCategory.products
              .filter(product => (product as Proflist).typeM === typeM)
              .map(product => (product as Proflist).thickness);
            return [...new Set(width)];
          }
        }
        return [];
      })
    );
  }

  getTrubaProductsByDiameter(categoryId: string, subCategoryId: string, diameter: number): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const width = subCategory.products
              .filter(product => (product as TrubaC).diameter === diameter)
              .map(product => (product as TrubaC).thickness);
            return [...new Set(width)];
          }
        }
        return [];
      })
    );
  }

  getUgolokProducts(categoryId: string, subCategoryId: string, width: number): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const thickness = subCategory.products
              .filter(product => (product as Ugolok).width === width)
              .map(product => (product as Ugolok).thickness);
            return [...new Set(thickness)];
          }
        }
        return [];
      })
    );
  }

  getListThickness(categoryId: string, subCategoryId: string): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const thickness = subCategory.products
              .map(product => (product as Listy).thickness);
            return [...new Set(thickness)];
          }
        }
        return [];
      })
    );
  }

  getUgolokWidth(categoryId: string, subCategoryId: string): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const thickness = subCategory.products
              .map(product => (product as Ugolok).width);
            return [...new Set(thickness)];
          }
        }
        return [];
      })
    );
  }

  getListWidth(categoryId: string, subCategoryId: string, thicknesses: number): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const width = subCategory.products
              .filter(product => (product as Listy).thickness === thicknesses)
              .map(product => (product as ProfilePipe).width);

            return [...new Set(width)];
          }
        }
        return [];
      })
    );
  }

  getListLength(categoryId: string, subCategoryId: string, thicknesses: number, width: number): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const length = subCategory.products
              .filter(product => (product as Listy).thickness === thicknesses && (product as Listy).width === width)
              .map(product => (product as ProfilePipe).length);
            return [...new Set(length)];
          }
        }
        return [];
      })
    );
  }

  getThicknessByHeightWidth(categoryId: string, subCategoryId: string, height: number, width: number): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const thicknesses = subCategory.products
              .filter(product => (product as ProfilePipe).width === width && (product as ProfilePipe).height === height)
              .map(product => (product as ProfilePipe).thickness);

            return [...new Set(thicknesses)];
          }
        }
        return [];
      })
    );
  }


  getUniqueHeightsByCategoryAndSubCategory(categoryId: string, subCategoryId: string): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
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

  getUniqueDiameterByCategoryAndSubCategory(categoryId: string, subCategoryId: string): Observable<number[]> {
    return this.http.get<CategoryInt[]>(this.jsonUrl).pipe(
      map(categories => {
        const category = categories.find(cat => this.dataService.transliterate(cat.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.dataService.transliterate(sub.title) === subCategoryId);
          if (subCategory) {
            const diameters = subCategory.products
              .filter(product => (product as TrubaC).diameter !== undefined)
              .map(product => (product as TrubaC).diameter);

            return Array.from(new Set(diameters));
          }
        }
        return [];
      })
    );
  }

  getProflistByThickness(categoryId: string, subCategoryId: string, thickness: number, colorsLength: number, typeM: string): Observable<Proflist> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as Proflist).thickness === thickness && (product as Proflist).colors.length === colorsLength && (product as Proflist).typeM === typeM) as Proflist)
    );
  }


  getListByThickness(categoryId: string, subCategoryId: string, thickness: number): Observable<Listy> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as Listy).thickness === thickness) as Listy)
    );
  }

  getListByWidth(categoryId: string, subCategoryId: string, thickness: number, width: number): Observable<Listy> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as Listy).thickness === thickness && (product as Listy).width === width) as Listy)
    );
  }

  getListByLength(categoryId: string, subCategoryId: string, thickness: number, width: number, length: number): Observable<Listy> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as Listy).thickness === thickness && (product as Listy).width === width && (product as Listy).length === length) as Listy)
    );
  }

  getProfilePipeByHeight(categoryId: string, subCategoryId: string, height: number): Observable<ProfilePipe> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as ProfilePipe).height === height) as ProfilePipe)
    );
  }

  getTrubaByDiameter(categoryId: string, subCategoryId: string, diameter: number): Observable<TrubaC> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as TrubaC).diameter === diameter) as TrubaC)
    );
  }

  getUgolokByWidth(categoryId: string, subCategoryId: string, width: number): Observable<Ugolok> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as Ugolok).width === width) as Ugolok)
    );
  }

  getUgolokThicknes(categoryId: string, subCategoryId: string, width: number, thickness: number): Observable<Ugolok> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as Ugolok).width === width && (product as Ugolok).thickness === thickness) as Ugolok)
    );
  }

  getProfilePipeByWidth(categoryId: string, subCategoryId: string, height: number, width: number): Observable<ProfilePipe> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as ProfilePipe).height === height && (product as ProfilePipe).width === width) as ProfilePipe)
    );
  }

  getProfilePipeByThickness(categoryId: string, subCategoryId: string, height: number, width: number, thickness: number): Observable<ProfilePipe> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as ProfilePipe).height === height && (product as ProfilePipe).width === width && (product as ProfilePipe).thickness === thickness) as ProfilePipe)
    );
  }

  getTrubaByThickness(categoryId: string, subCategoryId: string, diameter: number, thickness: number): Observable<TrubaC> {
    return this.http.get<any>(this.jsonUrl).pipe(
      map(data => this.extractProducts(data).find(product => this.dataService.transliterate(product.category) === categoryId && this.dataService.transliterate(product.subCategory) === subCategoryId && (product as TrubaC).diameter === diameter && (product as TrubaC).thickness === thickness) as TrubaC)
    );
  }

  private extractProducts(data: any): Product[] {
    const products: Product[] = [];
    data.forEach((category: any) => {
      category.subCategories.forEach((subCategory: any) => {
        subCategory.products.forEach((product: Product) => {
          products.push(product);
        });
      });
    });
    return products;
  }


}
