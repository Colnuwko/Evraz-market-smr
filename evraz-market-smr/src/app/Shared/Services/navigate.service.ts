import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {

  constructor(private router: Router) { }

  navigateToCategory(category: string): void {
    this.router.navigate(['/category/', category]);
  }
  navigateToSubCategory(category: string, subCategory: string): void {
    this.router.navigate(['/category/', category, 'subCategory', subCategory]);
  }
  goToHome() {
    this.router.navigate(['/']);
  }
}
