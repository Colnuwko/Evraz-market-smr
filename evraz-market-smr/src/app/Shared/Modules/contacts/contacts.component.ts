import { Component } from '@angular/core';
import {CustomAlertComponent} from "../custom-alert/custom-alert.component";
import {MatDialog} from "@angular/material/dialog";


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  constructor(public dialog: MatDialog) {
  }
   CopyNumber(){
      navigator.clipboard.writeText("+79277369925")
      this.dialog.open(CustomAlertComponent,{
      data: "Номер телефона скопирован: +79277369925"
    });
    }

    CopyMail(){
      navigator.clipboard.writeText("mercuriy63@bk.ru")
      this.dialog.open(CustomAlertComponent,{ data: "Адрес почты скопирован: mercuriy63@bk.ru"});
    }
}
