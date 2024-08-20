import { Component } from '@angular/core';
import {CatalogComponent} from "../catalog/catalog.component";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {ApplicationFormComponent} from "../../application-form/application-form.component";
import {MatDialog} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-telheadbar',
  standalone: true,
  imports: [
    CatalogComponent,
    RouterLink
  ],
  templateUrl: './telheadbar.component.html',
  styleUrl: './telheadbar.component.css'
})
export class TelheadbarComponent {
  constructor(public dialog: MatDialog, public html: HttpClient){}


  openform(){
    const dialogRef = this.dialog.open(ApplicationFormComponent, {
      width: '700px'
    });
  }
}
