import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BasketService } from 'src/app/basket/basket.service';
import { CheckoutService } from 'src/app/checkout.service';
import { IDeliveryMethod } from 'src/app/shared/models/deliveryMethod';

@Component({
  selector: 'app-checkout-delivery',
  templateUrl: './checkout-delivery.component.html',
  styleUrls: ['./checkout-delivery.component.css']
})
export class CheckoutDeliveryComponent implements OnInit {

  @Input() checkoutForm: FormGroup;
  deliveryMethods: IDeliveryMethod[] = [];
  constructor(private CheckoutService: CheckoutService, private basketService: BasketService) { 
    this.checkoutForm = new FormGroup({});
  }

  ngOnInit(): void {
    this.CheckoutService.getDeliveryMethods().subscribe((dm: IDeliveryMethod[]) =>{
      this.deliveryMethods = dm;
    },
    error =>{
      console.log(error);
    }
    );
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod){
    this.basketService.setShippingPrice(deliveryMethod);
  }

}
