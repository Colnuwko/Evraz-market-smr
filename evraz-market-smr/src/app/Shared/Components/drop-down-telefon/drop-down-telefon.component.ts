import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-drop-down-telefon',
  standalone: true,
  imports: [NgClass],
  templateUrl: './drop-down-telefon.component.html',
  styleUrl: './drop-down-telefon.component.css'
})
export class DropDownTelefonComponent {

    CopyNumber(){
      navigator.clipboard.writeText("8-800-555-3535")
      alert("Номер телефона скопирован: 8-800-555-3535");
    }


    CopyMail(){
      navigator.clipboard.writeText("metal.samara@mail.ru")
      alert("Адрес почты скопирован: metal.samara@mail.ru");
    }
}
