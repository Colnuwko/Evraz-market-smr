import { Component } from '@angular/core';
import { Armatura, Product, ProfilePipe, Proflist } from '../../Interfaces/producct';
import { ProductService } from '../../Services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, SubCategoryDetail } from '../../Interfaces/category';
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
  widths: number[] = [];
  thicknesses: number[] = [];
  heights: number[] = [];
  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId')!;
      const subCategoryId = params.get('subCategoryId')!;
      const productId = Number(params.get('productId'));
      this.productService.findProduct(categoryId, subCategoryId, productId).subscribe(product => {
        this.product = product;
        if (categoryId === Category.TRUBY) {
          this.productService.getProfilePipeProductsByHeight(categoryId, subCategoryId, (this.product as ProfilePipe)?.height).subscribe(data => {
            this.widths = data.widths;
            this.thicknesses = data.thicknesses;
          });
          this.productService.getUniqueHeightsByCategoryAndSubCategory(categoryId, subCategoryId).subscribe(heights => {
            this.heights = heights;
          });
        }
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

  checkH(product: number): boolean {
    return product === (this.product as ProfilePipe)?.height;
  }
  checkW(product: number): boolean {
    return product === (this.product as ProfilePipe)?.width;
  }
  checkT(product: number): boolean {
    return product === (this.product as ProfilePipe)?.thickness;
  }

  navigateToProduct(product: Product): void {
    this.router.navigate(['/category/', product.category, 'subCategory', product.subCategory, product.id]);
  }
}
