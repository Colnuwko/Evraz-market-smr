import {Component, Inject} from '@angular/core';
import {NavigateService} from "../../Services/navigate.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CategoryInt} from "../../Interfaces/category";

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 constructor(private navigate: NavigateService) {}
  navigateToCategory(category: string, ): void {
    this.navigate.navigateToCategory(category);
  }
}
