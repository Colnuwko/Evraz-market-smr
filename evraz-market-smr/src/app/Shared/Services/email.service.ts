import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class EmailService {

 private emailUrl = 'http://localhost:3000/send-email'; // Replace with your backend URL

  constructor(private http: HttpClient) { }

  sendEmail(name: string, number: string, email: string, message: string, ) {

    const data = {
      name: name,
      number: number,
      email: email,
      message: message
    };
      return this.http.post(this.emailUrl, data);
  }

}
