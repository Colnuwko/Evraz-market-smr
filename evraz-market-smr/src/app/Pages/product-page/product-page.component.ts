import { Component } from '@angular/core';
import { ProductViewComponent } from '../../Shared/Modules/product-view/product-view.component';
import { CategoryInt, SubCategoryDetail } from '../../Shared/Interfaces/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../Shared/Services/category.service';
import { NavigateService } from '../../Shared/Services/navigate.service';
import { NgIf } from '@angular/common';
import { Product } from '../../Shared/Interfaces/producct';
import { ProductService } from '../../Shared/Services/product.service';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductViewComponent, NgIf],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {
  category!: CategoryInt ;
  subCategories: SubCategoryDetail[] = [];
  product!: Product ;
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private dataService: CategoryService,
    private navigate: NavigateService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId')!;
      const subCategoryId = params.get('subCategoryId')!;
      const productId = Number(params.get('productId'));
      this.dataService.getSubCategoryById(categoryId, subCategoryId).subscribe(category => {

        if (category) {
          this.category = category;
          this.subCategories = category.subCategories;
        }
      });
      this.productService.findProduct(categoryId, subCategoryId, productId).subscribe(product => {
        this.product = product!;
      });

    });

  }
  navigateToCategory(category: string): void {
    this.navigate.navigateToCategory(category);
  }
  navigateToSubCategory(category: string, subCategory: string): void {
    this.navigate.navigateToSubCategory(category, subCategory);
  }
  goToHome() {
    this.navigate.goToHome();
  }
  translit(categoryName: string): string {
    return this.dataService.transliterate(categoryName);
  }

}
