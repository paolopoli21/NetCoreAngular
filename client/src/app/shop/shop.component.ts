import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/models/product';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: IProduct[];

  constructor(private shopService: ShopService) {
    this.products = [];
   }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe(response =>{
      
      this.products = response.data;
      console.log(this.products);
    },
    (error) =>{
      console.log(error);
    }
    );
  }

}
