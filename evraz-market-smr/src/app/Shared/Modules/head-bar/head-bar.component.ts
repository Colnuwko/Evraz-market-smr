import { Component } from '@angular/core';
import {CatalogComponent} from "./catalog/catalog.component";
import { RouterLink } from '@angular/router';
import {TemplateButtonRouterComponent} from "../../../template-button-router/template-button-router.component";
import {FormsModule, NgForm} from "@angular/forms";
@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [
    CatalogComponent, RouterLink, TemplateButtonRouterComponent, FormsModule
  ],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.css'
})
export class HeadBarComponent {

  submitForm(myForm: NgForm) {
    alert("sfgsd")
  }

  scroll(name: string ){
    if(name == 'about') {
      window.scrollTo(0, 1850);
    }
    else {
      window.scrollTo(0, 1600)
    }
  }
}
