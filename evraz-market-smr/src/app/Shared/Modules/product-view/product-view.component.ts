import { Component } from '@angular/core';
import { Armatura, Product, ProfilePipe, Proflist } from '../../Interfaces/producct';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../Interfaces/category';
import { NgFor, NgIf } from '@angular/common';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {
  product: Product | undefined;
  products: Product[] = [];

  constructor(private productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId')!;
      const subCategoryId = params.get('subCategoryId')!;
      const productId = Number(params.get('productId'));
      this.productService.findProduct(categoryId, subCategoryId, productId).subscribe(product => {
        this.product = product;
      });
      this.productService.getProductsByCategoryAndSubCategory(categoryId, subCategoryId).subscribe(product => {
        this.products = product;
      });
    });

  }
  isArmaturaProducts(products: Product[]): products is Armatura[] {
    return products.length > 0 && products[0].category === Category.ARMATURA;
  }
  isArmatura(product: Product): product is Armatura {
    return (product as Armatura).category === Category.ARMATURA;
  }
  isProfilePipe(product: Product): product is ProfilePipe {
    return (product as ProfilePipe).category === Category.TRUBY;
  }
  isProflist(product: Product): product is Proflist {
    return (product as Proflist).category === Category.PROFLIST;
  }

  check(product: Product): boolean {
    return product.name === this.product?.name;
  }
}
