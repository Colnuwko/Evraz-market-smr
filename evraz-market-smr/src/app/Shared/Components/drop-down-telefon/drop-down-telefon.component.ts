import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import {CustomAlertComponent} from "../../Modules/custom-alert/custom-alert.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-drop-down-telefon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './drop-down-telefon.component.html',
  styleUrl: './drop-down-telefon.component.css'
})
export class DropDownTelefonComponent {

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
