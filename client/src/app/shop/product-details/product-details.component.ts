import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BasketService } from 'src/app/basket/basket.service';
import { IProduct } from 'src/app/shared/models/product';
import { BreadcrumbService } from 'xng-breadcrumb';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: IProduct | undefined;
  quantity = 1;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute,
    private bcService: BreadcrumbService, private basketService: BasketService) { 
    this.product = undefined;
    this.bcService.set('@productDetails', '');
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  addItemToBasket(){
    if(this.product !== undefined){
      this.basketService.addItemToBasket(this.product, this.quantity);
    }
  }

  incrementQuantity(){
    this.quantity ++;
  }

  decrementQuantity(){
    if(this.quantity > 1){
      this.quantity--;
    }
  }

  loadProduct(){
    let id: any;
    id = this.activateRoute.snapshot.paramMap.get('id');
    this.shopService.getProduct(id).subscribe((product:any) =>{
      this.product = product;
      this.bcService.set('@productDetails', product.name);
    },
    error =>{
      console.log(error);
    }
    );
  }

}
