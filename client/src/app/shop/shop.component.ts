import { Component, OnInit } from '@angular/core';
import { IBrand } from '../shared/models/brand';
import { IProduct } from '../shared/models/product';
import { IType } from '../shared/models/productType';
import { ShopParams } from '../shared/models/shopParams';
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
  shopParams = new ShopParams();
  totalCount: number;
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
    this.totalCount = 0;
    // this.brandIdSelected = 0;
    // this.typeIdSelected = 0;
    // this.sortSelected = 'name';
   }

  ngOnInit(): void {
    this.getProducts();
    this.getBrands();
    this.getTypes();
  }

  getProducts(): void {
    // tslint:disable-next-line: max-line-length
    this.shopService.getProducts(this.shopParams).subscribe((response: any) => {
      this.products = response.data;
      this.shopParams.pageNumber = response.pageIndex;
      this.shopParams.pageSize = response.pageSize;
      this.totalCount = response.coutn;
      //debugger;
      console.log(this.totalCount);
    },
    (error) =>{
      console.log(error);
    }
    );
  }

  getBrands(): void {
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
    this.shopParams.brandId = brandId;
    console.log(this.shopParams.brandId);
    this.getProducts();
  }

  onTypeSelected(typeId: number): void{
    this.shopParams.typeId = typeId;
    this.getProducts();
  }

  onSortSelected(event: any): void{
    this.shopParams.sort = event.target.value;
    this.getProducts();
  }

  onPageChanged(event: any){
    this.shopParams.pageNumber = event.page;
    this.getProducts();
  }

}
