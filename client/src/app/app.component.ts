import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IPagination } from 'src/app/shared/models/pagination';
import { IProduct } from 'src/app/shared/models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Skinet';
  products: IProduct[];

  constructor( private http: HttpClient){
    this.products = [];
  }

  ngOnInit(): void {
    this.http.get<IPagination>('https://localhost:5001/api/products?pageSize=50')
    .subscribe((response : IPagination) =>{
      this.products = response.data;
      console.log(response);
    },
    error =>{
      console.log(error);
    }
    );
  }
}
