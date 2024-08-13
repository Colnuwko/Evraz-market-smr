import {Component} from '@angular/core';
import {
  Armatura,
  Balka,
  Listy,
  Product,
  ProfilePipe,
  Proflist,
  Samorezi,
  Setka,
  Shveller,
  Square,
  Stripe,
  TypeProduct,
  Ugolok,
  Wire
} from '../../Interfaces/producct';
import {ProductService} from '../../Services/product.service';
import {ActivatedRoute, Router} from '@angular/router';

import {NgFor, NgIf} from '@angular/common';
import {CategoryService} from '../../Services/category.service';
import {BasketService} from '../../Services/basket.service';
import {Subscription} from 'rxjs';
import {CategoryR} from "../../Interfaces/category";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-product-view',
  standalone: true,
  imports: [NgIf, NgFor, FormsModule],
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css',
  providers: [BasketService]
})
export class ProductViewComponent {
  product!: Product;
  products: Product[] = [];
  widths: number[] = [];
  thicknesses: number[] = [];
  heights: number[] = [];
  lengthInMeters: number = 6;
  totalCost: number = 0;
  private lengthSubscription!: Subscription;
  private costSubscription!: Subscription;

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router, private basket: BasketService, private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId')!;
      const subCategoryId = params.get('subCategoryId')!;
      const productId = Number(params.get('productId'));
      this.productService.findProduct(categoryId, subCategoryId, productId).subscribe(product => {
        this.product = product!;
        this.basket.initializeLengthAndCost(product);
        if (categoryId === this.categoryService.transliterate(CategoryR.TRUBY)) {
          this.productService.getProfilePipeProductsByHeight(categoryId, subCategoryId, (this.product as ProfilePipe).height).subscribe(data => {
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


    this.lengthSubscription = this.basket.getLengthInMeters().subscribe(length => {
      this.lengthInMeters = length;
    });

    this.costSubscription = this.basket.getTotalCost().subscribe(cost => {
      this.totalCost = cost;
    });
  }

  isArmaturaProducts(products: Product[]): products is Armatura[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.armatura;
  }

  isArmatura(product: Product): product is Armatura {
    return (product as Armatura)!.type === TypeProduct.armatura;
  }

  isProfilePipe(product: Product): product is ProfilePipe {
    return (product as ProfilePipe)!.type === TypeProduct.profilePipe;
  }

  isShveller(product: Product): product is Shveller {
    return (product as Shveller)!.type === TypeProduct.shveller;
  }

  isProflists(products: Product[]): products is Proflist[] {

    return products?.length > 0 && products[0]?.type === TypeProduct.proflist
  }

  isShvellers(products: Product[]): products is Shveller[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.shveller
  }

  isBalkas(products: Product[]): products is Balka[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.balka
  }

  isBalka(product: Product): product is Balka {
    return (product as Balka)!.type === TypeProduct.balka;
  }

  isUgoloks(products: Product[]): products is Ugolok[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.ugolok
  }

  isUgolok(product: Product): product is Ugolok {
    return (product as Ugolok)!.type === TypeProduct.ugolok;
  }

  isSquares(products: Product[]): products is Square[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.square
  }

  isSquare(product: Product): product is Square {
    return (product as Square)!.type === TypeProduct.square
  }

  isLists(products: Product[]): products is Listy[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.list
  }

  isList(product: Product): product is Listy {
    return (product as Square)!.type === TypeProduct.list
  }

  isSamorezi(product: Product): product is Samorezi {
    return (product as Square)!.type === TypeProduct.samorezi
  }

  isSamorezis(products: Product[]): products is Samorezi[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.samorezi
  }

  isWire(product: Product): product is Wire {
    return (product as Wire)!.type === TypeProduct.wire
  }

  isWires(products: Product[]): products is Wire[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.wire
  }

  isStripe(product: Product): product is Stripe {
    return (product as Wire)!.type === TypeProduct.stripe
  }

  isStripes(products: Product[]): products is Stripe[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.stripe
  }

  isSetkas(products: Product[]): products is Setka[] {
    return products?.length > 0 && products[0]?.type === TypeProduct.setka
  }

  isSetka(product: Product): product is Setka {
    return (product as Setka)!.type === TypeProduct.setka
  }

  ngOnDestroy(): void {
    if (this.lengthSubscription) {
      this.lengthSubscription.unsubscribe();
    }
    if (this.costSubscription) {
      this.costSubscription.unsubscribe();
    }
  }

  check(product: Product): boolean {
    return product.id === this.product.id;
  }

  checkH(product: number): boolean {
    return product === (this.product as ProfilePipe).height;
  }

  checkW(product: number): boolean {
    return product === (this.product as ProfilePipe).width;
  }

  checkT(product: number): boolean {
    return product === (this.product as ProfilePipe).thickness;
  }

  navigateToProduct(product: Product): void {
    this.router.navigate(['/category/', this.categoryService.transliterate(product.category), 'subCategory', this.categoryService.transliterate(product.subCategory), product.id]);
  }

  navigateToHeight(height: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId');
    this.productService.getProfilePipeByHeight(categoryId!, subCategoryId!, height).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  navigateToWidth(width: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    const height = (this.product as ProfilePipe).height;
    this.productService.getProfilePipeByWidth(categoryId, subCategoryId, height, width).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  navigateToThickness(thickness: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    const height = (this.product as ProfilePipe).height;
    const width = (this.product as ProfilePipe).width;
    this.productService.getProfilePipeByThickness(categoryId, subCategoryId, height, width, thickness).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  increaseLength(): void {
    if (this.product.type === TypeProduct.proflist || this.product.type === TypeProduct.setka) {
      this.basket.setLengthInMeters(this.lengthInMeters + 1);
    } else {
      this.basket.setLengthInMeters(this.lengthInMeters + 6);
    }
    this.basket.calculateTotalCost(this.product);
  }

  decreaseLength(): void {
    if (this.product.type === TypeProduct.proflist || this.product.type === TypeProduct.setka) {
      if (this.lengthInMeters - 1 > 0) {
        this.basket.setLengthInMeters(this.lengthInMeters - 1);
        this.basket.calculateTotalCost(this.product);
      }
    } else {
      if (this.lengthInMeters - 6 > 0) {
        this.basket.setLengthInMeters(this.lengthInMeters - 6);
        this.basket.calculateTotalCost(this.product);
      }
    }
  }

  isCategoryProfListOrSetka(): boolean {
    return this.product.type === TypeProduct.proflist || this.product.type === TypeProduct.setka;
  }

  onLengthBlur(): void {
    if (this.isCategoryProfListOrSetka()) {
      if (this.lengthInMeters < 1) {
        this.lengthInMeters = 1;
      }
    } else {
      const newValue = Math.round(this.lengthInMeters / 6) * 6;
      if (newValue >= 6) {
        this.lengthInMeters = newValue;
      } else {
        this.lengthInMeters = 6;
      }
    }
    this.basket.setLengthInMeters(this.lengthInMeters);
    this.basket.calculateTotalCost(this.product);
  }


}
