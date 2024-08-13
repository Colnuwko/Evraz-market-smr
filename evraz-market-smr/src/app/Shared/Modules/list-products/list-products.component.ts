import {Component} from '@angular/core';
import {CategoryInt, SubCategoryDetail} from '../../Interfaces/category';
import {ActivatedRoute, Router} from '@angular/router';
import {CategoryService} from '../../Services/category.service';
import {
  Armatura,
  Product,
  ProfilePipe,
  Proflist,
  Samorezi,
  Setka,
  Square,
  Stripe,
  TypeProduct,
  Wire
} from '../../Interfaces/producct';
import {NgFor, NgIf} from '@angular/common';

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
  ) {
  }

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
    return (product as Armatura).type === TypeProduct.armatura;
  }

  isProfilePipe(product: Product): product is ProfilePipe {
    return (product as ProfilePipe).type === TypeProduct.profilePipe;
  }

  isProflist(product: Product): product is Proflist {
    return (product as Proflist).type === TypeProduct.proflist;
  }

  isSamorezi(product: Product): product is Samorezi {
    return (product as Samorezi).type === TypeProduct.samorezi;
  }

  isSquare(product: Product): product is Square {
    return (product as Square).type === TypeProduct.square;
  }

  isWire(product: Product): product is Wire {
    return (product as Wire).type === TypeProduct.wire;
  }

  isStripe(product: Product): product is Stripe {
    return (product as Stripe).type === TypeProduct.stripe;
  }

  isSetka(product: Product): product is Setka {
    return (product as Setka).type === TypeProduct.setka;
  }

  navigateToSubCategory(detail: SubCategoryDetail, product: Product): void {
    this.router.navigate(['/category/', this.translit(this.category!.title), 'subCategory', this.translit(detail.title), product.id]);
  }

  translit(categoryName: string): string {
    return this.dataService.transliterate(categoryName);
  }
}
