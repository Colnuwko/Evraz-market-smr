import { Component } from '@angular/core';
import {
  Category,
  CategoryInt,
  CategoryR,
  SubCategory,
  SubCategoryDetail,
  SubCategoryR,
} from '../../Interfaces/category';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  card: CategoryInt = {
    id: 1,
    img: 'assets/armatura.jpg',
    category: Category.ARMATURA,
    subCategories: [
      {
        subCategory: SubCategory.ARMATURA_GLADKAYA,
        price: 100,
        title: SubCategoryR.ARMATURA_GLADKAYA,
      },
      {
        subCategory: SubCategory.ARMATURA_RIFLENAYA,
        price: 120,
        title: SubCategoryR.ARMATURA_RIFLENAYA,
      },
    ],
    title: CategoryR.ARMATURA,
  };

  constructor(private router: Router) {}

  navigateToCategory(): void {
    this.router.navigate(['/', this.card.category]);
  }
  navigateToSubCategory(detail: SubCategoryDetail): void {
    this.router.navigate(['/', this.card.category, detail.subCategory]);
  }
}
