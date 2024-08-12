import { Component } from '@angular/core';
import { CardProductComponent } from '../../Components/card-product/card-product.component';
import { CategoryInt, CategoryR, SubCategoryR } from '../../Interfaces/category';
import { NgFor } from '@angular/common';
import { Armatura } from '../../Interfaces/producct';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../Services/category.service';

@Component({
  selector: 'app-main-goods',
  standalone: true,
  imports: [CardProductComponent, NgFor],
  templateUrl: './main-goods.component.html',
  styleUrl: './main-goods.component.css'
})
export class MainGoodsComponent {
  categories!: CategoryInt[];
  ids: number[] = [1, 2, 3, 4, 5, 6];

  constructor(
    private dataService: CategoryService
  ) { }

  ngOnInit(): void {
    this.dataService.getCategoriesByIds(this.ids).subscribe(categories => {
      this.categories = categories;
    }
    )
  }
}
