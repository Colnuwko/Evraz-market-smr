import { Component } from '@angular/core';
import { ProductViewComponent } from '../../Shared/Modules/product-view/product-view.component';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [ProductViewComponent],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

}
