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
import { NavigateService } from '../../Services/navigate.service';

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [NgFor],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  @Input() card!: CategoryInt;

  constructor(private navigate: NavigateService) { }

  navigateToCategory(category: string): void {
    this.navigate.navigateToCategory(category);
  }
  navigateToSubCategory(category: string, subCategory: string): void {
    this.navigate.navigateToSubCategory(category, subCategory)
  }
}
