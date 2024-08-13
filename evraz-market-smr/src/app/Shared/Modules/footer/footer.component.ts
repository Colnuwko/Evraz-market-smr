import {Component, Inject} from '@angular/core';
import {NavigateService} from "../../Services/navigate.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CategoryInt} from "../../Interfaces/category";
import {CategoryService} from "../../Services/category.service";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
    protected categories!: CategoryInt[]
    constructor(private navigate: NavigateService, private dataService: CategoryService) {
      this.dataService.getCategories().subscribe(categories => {
          this.categories = categories;
      })}

    navigateToCategory(category: string, ): void {
      this.navigate.navigateToCategory(category);
      window.scrollTo(0, 0);
    }

    translit(categoryName: string): string {
    return this.dataService.transliterate(categoryName);
    }

}
