import { Component } from '@angular/core';
import {CatalogComponent} from "./catalog/catalog.component";

@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [
    CatalogComponent
  ],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.css'
})
export class HeadBarComponent {

}
