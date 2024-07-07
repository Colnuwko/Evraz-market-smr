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
  isDropdownOpen = false;

  toggleDropdown(state: boolean): void {
    this.isDropdownOpen = state;
  }
}
