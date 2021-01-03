import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService } from 'src/app/account/account.service';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasket } from 'src/app/shared/models/basket';
import { IUser } from 'src/app/shared/models/User';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  basket$: Observable<IBasket> | undefined;
  currentUser$: Observable<IUser>;
  constructor(private basketService: BasketService, private accountService: AccountService) {
    this.currentUser$ = this.accountService.currentUser$;
   }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  logout(){
    this.accountService.logout();
  }

}
