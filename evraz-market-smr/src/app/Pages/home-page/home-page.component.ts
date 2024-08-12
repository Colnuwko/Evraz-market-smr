import { Component } from '@angular/core';
import { StatusBarComponent } from '../../Shared/Modules/status-bar/status-bar.component';
import { MainGoodsComponent } from '../../Shared/Modules/main-goods/main-goods.component';

import {AfterheaderBgComponent} from "../afterheader-bg/afterheader-bg.component";
import {AboutUsComponent} from "../../Shared/Modules/about-us/about-us.component";
import {FeedbackComponent} from "../../Shared/Modules/feedback/feedback.component";
import {ContactsComponent} from "../../Shared/Modules/contacts/contacts.component";


@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [StatusBarComponent, MainGoodsComponent, AfterheaderBgComponent, AboutUsComponent, FeedbackComponent, ContactsComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
