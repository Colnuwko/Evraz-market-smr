import { Component } from '@angular/core';
import { CardProductComponent } from '../../Components/card-product/card-product.component';

@Component({
  selector: 'app-main-goods',
  standalone: true,
  imports: [CardProductComponent],
  templateUrl: './main-goods.component.html',
  styleUrl: './main-goods.component.css'
})
export class MainGoodsComponent {

}
