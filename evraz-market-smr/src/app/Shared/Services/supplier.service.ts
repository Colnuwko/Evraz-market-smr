import { Injectable } from '@angular/core';
import {Supplier} from "../Interfaces/supplier";
import {  Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  private jsonUrl = 'assets/suppliers.json';
  constructor(private http: HttpClient) { }

   getallsuppliers(): Observable<Supplier[]>
  {
    return this.http.get<Supplier[]>(this.jsonUrl);
  }
}
