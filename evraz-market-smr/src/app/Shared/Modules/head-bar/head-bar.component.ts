import {Component, ElementRef} from '@angular/core';
import {CatalogComponent} from "./catalog/catalog.component";
import { RouterLink } from '@angular/router';
import {TemplateButtonRouterComponent} from "../../../template-button-router/template-button-router.component";
import {FormsModule, NgForm} from "@angular/forms";
import {ApplicationFormComponent} from "../application-form/application-form.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {EmailService} from "../../Services/email.service";

@Component({
  selector: 'app-head-bar',
  standalone: true,
  imports: [
    CatalogComponent, RouterLink, TemplateButtonRouterComponent, FormsModule, MatButtonModule, MatDialogModule, HttpClientModule
  ],
  templateUrl: './head-bar.component.html',
  styleUrl: './head-bar.component.css',
  providers: [EmailService]
})
export class HeadBarComponent {

  constructor(public dialog: MatDialog, public html: HttpClient, private elementRef: ElementRef){}
  submitForm(myForm: NgForm) {
    alert("sfgsd")
  }
  openform(){
    const dialogRef = this.dialog.open(ApplicationFormComponent, {
      width: '700px'
    });
  }

  scroll(name: string ) {
   if(name == 'about') {
       window.scrollTo(0, 2200);
    }
    else {
       window.scrollTo(0, 3650)
    }
   }
}
