import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, Observable} from 'rxjs';
import {CategoryInt} from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private dataUrl = 'assets/data.json';

  constructor(private http: HttpClient) {

  }

  getCategories(): Observable<CategoryInt[]> {
    return this.http.get<CategoryInt[]>(this.dataUrl);
  }

  getCategoryById(id: string): Observable<CategoryInt | undefined> {

    return this.http.get<CategoryInt[]>(this.dataUrl).pipe(
      map(categories => categories.find(category =>

          this.transliterate(category.title) === id

      ))
    );
  }

  getSubCategoryById(categoryId: string, subCategoryId: string): Observable<CategoryInt | undefined> {
    return this.http.get<CategoryInt[]>(this.dataUrl).pipe(
      map(categories => {
        const category = categories.find(category =>this.transliterate( category.title) === categoryId);
        if (category) {
          const subCategory = category.subCategories.find(sub => this.transliterate( sub.title) === subCategoryId);
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
  private translitMap: { [key: string]: string } = {
    'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd', 'е': 'e', 'ё': 'e',
    'ж': 'zh', 'з': 'z', 'и': 'i', 'й': 'y', 'к': 'k', 'л': 'l', 'м': 'm',
    'н': 'n', 'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't', 'у': 'u',
    'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch', 'ш': 'sh', 'щ': 'shch', 'ы': 'y',
    'э': 'e', 'ю': 'yu', 'я': 'ya', ' ': "_"
  };
  private reverseTranslitMap: { [key: string]: string } = {};

  transliterate(text: string): string {
    return text.split('').map(char => {
      const lowerChar = char.toLowerCase();
      if (lowerChar === 'ь' || lowerChar === 'ъ') {
        return '';
      }
      return this.translitMap[lowerChar] || char;
    }).join('');
  }

}
