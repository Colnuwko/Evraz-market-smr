import { Injectable } from '@angular/core';
import {Feed} from "../Interfaces/feed";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

   private jsonUrl = 'assets/feed.json';
  constructor(private http: HttpClient) { }
  getProductsSmall(): Observable<Feed[]>
  {
    return this.http.get<Feed[]>(this.jsonUrl);
  }

}
