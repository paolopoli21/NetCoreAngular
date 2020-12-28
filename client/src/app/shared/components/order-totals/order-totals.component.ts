import { Component, OnInit } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';
import { Observable } from 'rxjs';
import { BasketService } from 'src/app/basket/basket.service';
import { IBasketTotals } from '../../models/basket';

@Component({
  selector: 'app-order-totals',
  templateUrl: './order-totals.component.html',
  styleUrls: ['./order-totals.component.css']
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$!: Observable<IBasketTotals>;

  constructor(private basketService: BasketService) { 

  }

  ngOnInit(): void { 
    this.basketTotal$ = this.basketService.basketTotal$;
  }

}
