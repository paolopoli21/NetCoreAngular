import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.checkoutForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.createCheckoutForm();
  }

  createCheckoutForm(){
    this.checkoutForm = this.fb.group({
      addessForm: this.fb.group({
        firstName: [null, Validators.required],
        lasttName: [null, Validators.required],
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipcode: [null, Validators.required]
      }),
      deliveryForm: this.fb.group({
        deliveryMethod: [null, Validators.required]
      }),
      paymentForm: this.fb.group({
        deliveryMethod: [null, Validators.required]
      })
    });
  }

}
