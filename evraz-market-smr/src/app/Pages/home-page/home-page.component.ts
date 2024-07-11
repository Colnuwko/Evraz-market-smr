import { Component } from '@angular/core';
import { StatusBarComponent } from '../../Shared/Modules/status-bar/status-bar.component';
import { MainGoodsComponent } from '../../Shared/Modules/main-goods/main-goods.component';
import {FeedbackComponent} from "../../Shared/Modules/feedback/feedback.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [StatusBarComponent, MainGoodsComponent, FeedbackComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
