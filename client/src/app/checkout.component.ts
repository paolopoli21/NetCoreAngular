import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from './account/account.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  checkoutForm: FormGroup;
  validAddress?: boolean = false;
  validDelivery?: boolean = false;

  constructor(private fb: FormBuilder, private accountService: AccountService) { 
    this.checkoutForm = this.fb.group({});
  }

  ngOnInit(): void {
    this.createCheckoutForm();
    this.validAddress = this.checkoutForm.get('addressForm')?.valid;
    this.validDelivery = this.checkoutForm.get('deliveryForm')?.valid;
    this.getAddressFormValues();
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

  getAddressFormValues(){
    this.accountService.getUserAddress().subscribe(address =>{
      if(address){
        this.checkoutForm.get('addressForm')?.patchValue(address);
      }
    },
    error =>{
      console.log(error);
    }
    );
  }

}
