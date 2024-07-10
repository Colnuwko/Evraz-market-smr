import { Component } from '@angular/core';
import { CategoryInt, SubCategoryDetail } from '../../Shared/Interfaces/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../Shared/Services/category.service';
import { CommonModule, NgForOf, NgIf } from '@angular/common';
import { Armatura, Product, ProfilePipe } from '../../Shared/Interfaces/producct';
import { ListProductsComponent } from '../../Shared/Modules/list-products/list-products.component';
import { ListCategoriesComponent } from '../../Shared/Modules/list-categories/list-categories.component';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [ListProductsComponent, ListCategoriesComponent, NgIf, CommonModule],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  category: CategoryInt | undefined;
  subCategories: SubCategoryDetail[] = [];
  constructor(
    private route: ActivatedRoute,
    private dataService: CategoryService,

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

          }
        });
      }
    });
  }

}
