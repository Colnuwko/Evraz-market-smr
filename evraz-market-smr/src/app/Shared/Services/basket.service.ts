import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../Interfaces/producct';
import { Category } from '../Interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  public lengthInMeters = new BehaviorSubject<number>(6);
  public totalCost = new BehaviorSubject<number>(0);
  constructor() { }
  setLengthInMeters(length: number): void {
    this.lengthInMeters.next(length);
  }

  getLengthInMeters(): Observable<number> {
    return this.lengthInMeters.asObservable();
  }

  setTotalCost(cost: number): void {
    this.totalCost.next(cost);
  }

  getTotalCost(): Observable<number> {
    return this.totalCost.asObservable();
  }

  calculateTotalCost(product: Product): void {
    const length = this.lengthInMeters.value;
    if (product) {
      const cost = product.price * length;
      this.setTotalCost(cost);
    }
  }
  initializeLengthAndCost(product: Product | undefined): void {
    if (product?.category === Category.PROFLIST) {
      const lengthInMeters = 1;
      this.setLengthInMeters(lengthInMeters);
      this.calculateTotalCost(product);
    }
    else {
      const lengthInMeters = 6;
      this.setLengthInMeters(lengthInMeters);
      if (product)
        this.calculateTotalCost(product);
    }
  }

}
