import {ChangeDetectionStrategy, Component, Inject} from "@angular/core";
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {ListCategoriesComponent} from "../../list-categories/list-categories.component";
import {NgForOf, NgIf} from "@angular/common";
import {CategoryInt} from "../../../Interfaces/category";
import {CategoryService} from "../../../Services/category.service";
import {NavigateService} from "../../../Services/navigate.service";

@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: './dialog-content-example-dialog.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, ListCategoriesComponent, NgForOf, NgIf],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ListCategoriesComponent]
})
export class DialogContentExampleDialog {
  expandedCategories: Set<number> = new Set();
  constructor(@Inject(MAT_DIALOG_DATA) public categories: CategoryInt[], private navigate: NavigateService, ) {}
  toggleCategory(id: number): void {
    this.expandedCategories.clear();
    this.expandedCategories.add(id);

  }

  navigateToSubCategory(category: string, subCategory: string): void {
    this.navigate.navigateToSubCategory(category, subCategory)
  }
}
