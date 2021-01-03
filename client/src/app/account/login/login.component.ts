import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor(private accountService: AccountService,private router: Router) { }

  ngOnInit(): void {
    this.createLoginForm();
    
  }

  createLoginForm(){
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
 
  onSubmit(){
    this.accountService.login(this.loginForm.value)
      .subscribe(() => {
        this.router.navigateByUrl('/shop');
        console.log("User logged in");
      },
      error =>{
        console.log(error);
      }
      );
  }
}
