import { Component } from '@angular/core';
import {MatDialogActions, MatDialogClose} from "@angular/material/dialog";
import {EmailService} from "../../Services/email.service";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {CustomAlertComponent} from "../custom-alert/custom-alert.component";

@Component({
  selector: 'app-application-form',
  standalone: true,
  imports: [
    MatDialogActions,
    MatDialogClose,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgIf,
    MatDialogModule
  ],
  providers: [EmailService],
  templateUrl: './application-form.component.html',
  styleUrl: './application-form.component.css'
})
export class ApplicationFormComponent {

  // @ts-ignore
  protected clientForm: FormGroup;
  constructor(private emailService: EmailService, private fb: FormBuilder, public dialog: MatDialog) {
     this._createForm();
  }
  private _createForm(){
    this.clientForm = this.fb.group({
      name: ['', [Validators.required]],
      number: ['', [Validators.required]],
      email: ['', []],
      message: ['', [Validators.required]]
    });
  }

  onSubmit() {
    // @ts-ignore
    let response = this.emailService.sendEmail(this.clientForm.get('name')?.value, this.clientForm.get('number')?.value,
      this.clientForm.get('email')?.value, this.clientForm.get('message')?.value);
     const dialogRef = this.dialog.open(CustomAlertComponent, {
      data: "Заявка успешно отправлена. Менеджер свяжится с вами в ближайшее время."
    });

  }

}
