import { Component } from '@angular/core';
import { CategoryInt } from '../../Shared/Interfaces/category';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../../Shared/Services/category.service';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-category-page',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './category-page.component.html',
  styleUrl: './category-page.component.css'
})
export class CategoryPageComponent {
  category: CategoryInt | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: CategoryService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId');
      const subCategoryId = params.get('subCategoryId') ? params.get('subCategoryId'): undefined;
      if(categoryId){
      if (subCategoryId) {
        this.dataService.getSubCategoryById(categoryId, subCategoryId).subscribe(category => {
          this.category = category;
        });
      } else {
        this.dataService.getCategoryById(categoryId).subscribe(category => {
          this.category = category;
        });
      }
    }
    });
  }
}
