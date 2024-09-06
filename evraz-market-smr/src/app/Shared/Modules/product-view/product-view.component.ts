import {Component} from '@angular/core';
import {
  Armatura,
  Balka,
  Dobory,
  Listy,
  Product,
  ProfilePipe,
  Proflist,
  Samorezi,
  Setka,
  Shveller,
  Square,
  Stripe,
  TrubaC,
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
import {CategoryR, SubCategoryR} from "../../Interfaces/category";
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
  diameters: number[] = [];
  heights: number[] = [];
  lengths: number[] = [];
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
        this.basket.initializeLengthAndCost(product!);
        if (categoryId === this.categoryService.transliterate(CategoryR.TRUBY)) {
          this.productService.getProfilePipeProductsByHeight(categoryId, subCategoryId, (this.product as ProfilePipe).height).subscribe(widths => {
            this.widths = widths;

          });
          this.productService.getUniqueHeightsByCategoryAndSubCategory(categoryId, subCategoryId).subscribe(heights => {
            this.heights = heights;
          });
          this.productService.getThicknessByHeightWidth(categoryId, subCategoryId, (this.product as ProfilePipe).height, (this.product as ProfilePipe).width).subscribe(thickness => {
            if (this.product.type === TypeProduct.trubaC) {
              this.productService.getUniqueDiameterByCategoryAndSubCategory(categoryId, subCategoryId).subscribe(diameters => {
                this.diameters = diameters;
              })
              this.productService.getTrubaProductsByDiameter(categoryId, subCategoryId, (this.product as TrubaC).diameter).subscribe(trubaProducts => {
                this.thicknesses = trubaProducts;
              })
            } else {
              this.thicknesses = thickness;
            }
          });
        }
        if (subCategoryId === this.categoryService.transliterate(SubCategoryR.UGOLOK)) {
          this.productService.getUgolokProducts(categoryId, subCategoryId, (this.product as Ugolok).width).subscribe(ugolokProducts => {
            this.thicknesses = ugolokProducts;
          })
          this.productService.getUgolokWidth(categoryId, subCategoryId).subscribe(widths => {
            this.widths = widths;
          })
        }
        if (categoryId === this.categoryService.transliterate(CategoryR.LISTY)) {
          this.productService.getListThickness(categoryId, subCategoryId).subscribe(thicknesses => {
            this.thicknesses = thicknesses;
          })
          this.productService.getListWidth(categoryId, subCategoryId, (this.product as Listy).thickness).subscribe(widths => {
            this.widths = widths;
          })
          this.productService.getListLength(categoryId, subCategoryId, (this.product as Listy).thickness, (this.product as Listy).width).subscribe(lengths => {
            this.lengths = lengths;
          })

        }
        if (this.product.type === TypeProduct.trubaC) {
          this.productService.getUniqueDiameterByCategoryAndSubCategory(categoryId, subCategoryId).subscribe(diameters => {
            this.diameters = diameters;
          })
        }
        if (categoryId === this.categoryService.transliterate(CategoryR.PROFLIST)) {
          this.productService.getProflistProductsByThickness(categoryId, subCategoryId, (this.product as Proflist).typeM).subscribe(proflistProducts => {
            this.thicknesses = proflistProducts;
          })
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

  isProflist(product: Product): product is Proflist {

    return (product as Shveller)!.type === TypeProduct.proflist
  }

  checkTypeSamorezi(type: string): boolean {
    return (this.product as Samorezi).typeS === type;
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

  checkSamorezi(product: Product): boolean {
    return product.type === TypeProduct.samorezi;
  }

  checkDobory(product: Product): boolean {
    return product.type === TypeProduct.dobory;
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

  isDobory(product: Product): product is Dobory {
    return (product as Dobory)!.type === TypeProduct.dobory
  }

  isTruba(product: Product): product is TrubaC {
    return (product as Setka)!.type === TypeProduct.trubaC
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

  checkThickness(product: number): boolean {
    return product === (this.product as TrubaC).thickness;
  }

  checkD(product: number): boolean {
    return product === (this.product as TrubaC).diameter;
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

  checkL(product: number): boolean {
    return product === (this.product as Listy).length;
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

  navigateToDiameter(diameter: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId');
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId');
    this.productService.getTrubaByDiameter(categoryId!, subCategoryId!, diameter).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  navigateToListThickness(thickness: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    this.productService.getListByThickness(categoryId, subCategoryId, thickness).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  navigateToProflistThickness(thickness: number, typeM: string): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    this.productService.getProflistByThickness(categoryId, subCategoryId, thickness, (this.product as Proflist).colors.length, typeM).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  navigateToListWidth(width: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    this.productService.getListByWidth(categoryId, subCategoryId, (this.product as Listy).thickness, width).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  navigateToListLength(length: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    this.productService.getListByLength(categoryId, subCategoryId, (this.product as Listy).thickness, (this.product as Listy).width, length).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  navigateToTrubaThickness(thickness: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    const diameter = (this.product as TrubaC).diameter;
    this.productService.getTrubaByThickness(categoryId, subCategoryId, diameter, thickness).subscribe(product => {
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

  navigateToWidthUgolok(width: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    this.productService.getUgolokByWidth(categoryId, subCategoryId, width).subscribe(product => {
      this.navigateToProduct(product);
    });
  }

  navigateToThicknessUgolok(thickness: number): void {
    const categoryId = this.route.snapshot.paramMap.get('categoryId')!;
    const subCategoryId = this.route.snapshot.paramMap.get('subCategoryId')!;
    this.productService.getUgolokThicknes(categoryId, subCategoryId, (this.product as Ugolok).width, thickness).subscribe(product => {
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
    if (this.isCategoryProfListOrSetka()) {
      this.basket.setLengthInMeters(this.lengthInMeters + 1);
    } else {
      this.basket.setLengthInMeters(this.lengthInMeters + 6);
    }
    this.basket.calculateTotalCost(this.product);
  }

  isZn(color: string): boolean {
    return color === "Оцинк.";
  }

  decreaseLength(): void {
    if (this.isCategoryProfListOrSetka()) {
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
    return (this.product.type === TypeProduct.proflist || this.product.type === TypeProduct.setka || this.product.type === TypeProduct.list || this.product.type === TypeProduct.dobory || this.product.type === TypeProduct.wire || this.product.type === TypeProduct.samorezi)
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
