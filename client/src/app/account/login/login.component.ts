import { Component, OnInit } from '@angular/core';
import {ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({});

  constructor() { }

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
    console.log(this.loginForm?.value);
  }

}
