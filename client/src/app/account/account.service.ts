import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IUser } from '../shared/models/User';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new BehaviorSubject<IUser | null>(null);
  //private currentUserSource:BehaviorSubject<IUser>;
  currentUsersource = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    //  this.currentUserSource = new BehaviorSubject<IUser | null>(null);
    //  this.currentUsersource = this.currentUserSource.asObservable();
  }

  login(values: any){
    return this.http.post(this.baseUrl + 'account/login', values).pipe(
      map((user: any) =>{
        localStorage.setItem('token', user.token);
        this.currentUserSource.next(user);
      })
    );
  }

  register(values: any){
    return this.http.post(this.baseUrl + 'account/register', values).pipe(
      map((user: any)=>{
        if(user){
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

  logout(){
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string){
    return this.http.get(this.baseUrl + '/account/email/emailexists?email=' + email);
  }
}
