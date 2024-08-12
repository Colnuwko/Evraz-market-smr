import { Component } from '@angular/core';
import {CategoryInt, CategoryR, SubCategoryDetail} from '../../Interfaces/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../Services/category.service';
import { Armatura, Product, ProfilePipe, Proflist } from '../../Interfaces/producct';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {
  category: CategoryInt | undefined;
  subCategories: SubCategoryDetail[] = [];


  constructor(
    private route: ActivatedRoute,
    private dataService: CategoryService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId')!;
      const subCategoryId = params.get('subCategoryId');

      if (subCategoryId) {
        this.dataService.getSubCategoryById(categoryId, subCategoryId).subscribe(category => {
          if (category) {

            this.category = category;
            this.subCategories = category.subCategories;
          }
        });
      } else {
        this.dataService.getCategoryById(categoryId).subscribe(category => {
          if (category) {
            this.category = category;
            this.subCategories = category.subCategories;
          }
        });
      }
    });
  }

  isArmatura(product: Product): product is Armatura {
    return (product as Armatura).category === CategoryR.ARMATURA;
  }

  isProfilePipe(product: Product): product is ProfilePipe {
    return (product as ProfilePipe).category === CategoryR.TRUBY;
  }
  isProflist(product: Product): product is Proflist {
    return (product as Proflist).category === CategoryR.PROFLIST;
  }


  navigateToSubCategory(detail: SubCategoryDetail, product: Product): void {
    this.router.navigate(['/category/', this.translit(this.category!.title), 'subCategory', this.translit( detail.title), product.id]);
  }
  translit(categoryName: string): string {
    return this.dataService.transliterate(categoryName);
  }
}
