import { Component } from '@angular/core';
import { DropDownTelefonComponent } from '../../Components/drop-down-telefon/drop-down-telefon.component';

@Component({
  selector: 'app-status-bar',
  standalone: true,
  imports: [DropDownTelefonComponent],
  templateUrl: './status-bar.component.html',
  styleUrl: './status-bar.component.css'
})
export class StatusBarComponent {

}
