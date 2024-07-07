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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'freshHouse';
}
