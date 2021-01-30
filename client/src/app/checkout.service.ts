import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IDeliveryMethod } from './shared/models/deliveryMethod';
import { IOrderToCreate } from './shared/models/order';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {
  baseUrl = environment.apiUrl;
  dm: IDeliveryMethod[] = [];

  constructor(private http: HttpClient) { }

  createOrder(order: IOrderToCreate){
    return this.http.post(this.baseUrl + 'orders', order);
  }

  getDeliveryMethods() {
    return this.http.get(this.baseUrl + 'orders/deliveryMethods').pipe(
      map((dm:any)=>{
        this.dm = dm;
        return this.dm.sort((a,b)=> a.price - b.price);
      })
    );
  }
}

      