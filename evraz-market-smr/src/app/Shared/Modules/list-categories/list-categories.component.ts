import { Component } from '@angular/core';
import { CategoryService } from '../../Services/category.service';
import { CategoryInt } from '../../Interfaces/category';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { NavigateService } from '../../Services/navigate.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.css'
})
export class ListCategoriesComponent {
  categories!: CategoryInt[];
  expandedCategories: Set<number> = new Set();

  constructor(
    private dataService: CategoryService,
    private navigate: NavigateService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      const categoryId = params.get('categoryId')!;
      this.dataService.getCategoryById(categoryId).subscribe(category => {
        if (category) {
          this.toggleCategory(category.id)
        }
      });
      this.dataService.getCategories().subscribe(categories => {
        this.categories = categories;
      }
      )

    });
  }

  toggleCategory(id: number): void {
    this.expandedCategories.clear();
    this.expandedCategories.add(id);

  }

  navigateToCategory(category: string): void {
    this.navigate.navigateToCategory(category);
  }
  navigateToSubCategory(category: string, subCategory: string): void {
    this.navigate.navigateToSubCategory(category, subCategory);
  }
  translit(categoryName: string): string {
    return this.dataService.transliterate(categoryName);
  }
}
