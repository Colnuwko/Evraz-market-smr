import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import {
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
} from '@angular/router';
import { StatusBarComponent } from './Shared/Modules/status-bar/status-bar.component';
import {HeadBarComponent} from "./Shared/Modules/head-bar/head-bar.component";
import { CategoryService } from './Shared/Services/category.service';
import { ProductService } from './Shared/Services/product.service';
import { NavigateService } from './Shared/Services/navigate.service';
import {FooterComponent} from "./Shared/Modules/footer/footer.component";
import {AfterheaderBgComponent} from "./Pages/afterheader-bg/afterheader-bg.component";
import {TelheadbarComponent} from "./Shared/Modules/head-bar/telheadbar/telheadbar.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HttpClientModule,
    RouterLink,
    CommonModule,
    RouterLinkActive,
    RouterModule,
    StatusBarComponent,
    HeadBarComponent,
    FooterComponent,
    AfterheaderBgComponent,
    TelheadbarComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [CategoryService, ProductService, NavigateService]
})
export class AppComponent {
  title = 'MercuryMetal';
}
