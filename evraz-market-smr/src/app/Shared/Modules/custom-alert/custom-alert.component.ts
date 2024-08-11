import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CategoryInt} from "../../Interfaces/category";

@Component({
  selector: 'app-custom-alert',
  standalone: true,
  imports: [],
  templateUrl: './custom-alert.component.html',
  styleUrl: './custom-alert.component.css'
})
export class CustomAlertComponent {
  protected text: string = "";

  constructor(@Inject(MAT_DIALOG_DATA) text: string) {
    this.text = text;
  }
}
