import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: IProduct[];
  brands: IBrand[];
  types: IType[];
  brandIdSelected: number;
  typeIdSelected: number;
  sortSelected: string;
  sortOptions = [
    {
      name: 'Alphabetical',
      value: 'name'
    },
    {
      name: 'Price: Low to High',
      value: 'priceAsc'
    },
    {
      name: 'Price: High to Low',
      value: 'priceDesc'
    }
];

  constructor(private shopService: ShopService) {
    this.products = [];
    this.brands = [];
    this.types = [];
    this.brandIdSelected = 0;
    this.typeIdSelected = 0;
    this.sortSelected = 'name';
   }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(){
    this.shopService.getProducts(this.brandIdSelected, this.typeIdSelected, this.sortSelected).subscribe((response: any) => {
      this.products = response.data;
      //console.log(this.products);
    },
    (error) =>{
      console.log(error);
    }
    );
  }

  getBrands(): void{
    this.shopService.getBrands().subscribe(response => {
      this.brands = [{id: 0, name: 'All'}, ...response];
    },
    error =>{
      console.log(error);
    }
    );
  }

  getTypes(): void{
    this.shopService.getTypes().subscribe(response => {
      this.types = [{id: 0, name: 'All'}, ...response];
    },
    error =>{
      console.log(error);
    }
    );
  }

  onBrandSelected(brandId: number): void{
    this.brandIdSelected = brandId;
    console.log(this.brandIdSelected);
    this.getProducts();
  }

  onTypeSelected(typeId: number): void{
    this.typeIdSelected = typeId;
    this.getProducts();
  }

  onSortSelected(event: any): void{
    //debugger;
    //console.log(event)
    this.sortSelected = event.target.value;
    this.getProducts();
  }

}
