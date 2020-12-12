import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/shared/models/product';
import { ShopService } from '../shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product?: IProduct | undefined;

  constructor(private shopService: ShopService, private activateRoute: ActivatedRoute) { 
    this.product = undefined;
  }

  ngOnInit(): void {
    this.loadProduct();
  }

  loadProduct(){
    let id: any;
    id = this.activateRoute.snapshot.paramMap.get('id');
    this.shopService.getProduct(id).subscribe((product:any) =>{
      this.product = product;
    },
    error =>{
      console.log(error);
    }
    );
  }

}
