import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose} from "@angular/material/dialog";
import {EmailService} from "../../Services/email.service";
import {FormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    HttpClientModule
  ],
  providers: [EmailService],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent {
  protected name: string = "";
  protected email: string = "";
  protected message: string = "";

  constructor(private emailService: EmailService) {}

  onSubmit() {
    this.emailService.sendEmail(this.name, this.email, this.message).subscribe();
  }

}
