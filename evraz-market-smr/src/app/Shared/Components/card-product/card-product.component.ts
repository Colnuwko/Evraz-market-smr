import { Component, Input } from '@angular/core';
import {

  CategoryInt,
  CategoryR,

  SubCategoryDetail,
  SubCategoryR,
} from '../../Interfaces/category';
import {NgFor, NgIf, SlicePipe} from '@angular/common';
import { Router } from '@angular/router';
import { NavigateService } from '../../Services/navigate.service';
import {CategoryService} from "../../Services/category.service";

@Component({
  selector: 'app-card-product',
  standalone: true,
  imports: [NgFor, NgIf, SlicePipe],
  templateUrl: './card-product.component.html',
  styleUrl: './card-product.component.css',
})
export class CardProductComponent {
  @Input() card!: CategoryInt;
  constructor(private navigate: NavigateService, private dataService: CategoryService) { }

  navigateToCategory(category: string): void {
    this.navigate.navigateToCategory(category);
  }
  navigateToSubCategory(category: string, subCategory: string): void {
    this.navigate.navigateToSubCategory(category, subCategory)
  }
  translit(categoryName: string): string {
    return this.dataService.transliterate(categoryName);
  }
}
