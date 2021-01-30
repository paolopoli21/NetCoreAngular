import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from 'src/app/account/account.service';

@Component({
  selector: 'app-checkout-address',
  templateUrl: './checkout-address.component.html',
  styleUrls: ['./checkout-address.component.css']
})
export class CheckoutAddressComponent implements OnInit {
  @Input() checkoutForm: FormGroup;

  constructor(private fb: FormBuilder, private accoutnService: AccountService, private toastr: ToastrService) { 
    this.checkoutForm = this.fb.group({});
  }

  ngOnInit(): void {
  }

  saveUserAddress(){
    this.accoutnService.updateUserAddress(this.checkoutForm.get('addressForm')?.value).subscribe(() =>{
      this.toastr.success('Address save');
    }
    ,
    error =>{
      this.toastr.error(error.message);
      console.log(error);
    }
    );
  }

}
