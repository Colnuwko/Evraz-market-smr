import { Component, Input } from '@angular/core';
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
  @Input() card!:CategoryInt;

  constructor(private router: Router) {}

  navigateToCategory(): void {
    this.router.navigate(['/category/', this.card.category]);
  }
  navigateToSubCategory(detail: SubCategoryDetail): void {
    this.router.navigate(['/category/', this.card.category,'subCategory', detail.subCategory]);
  }
}
