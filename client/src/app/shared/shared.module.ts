import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PaginHeaderComponent } from './components/pagin-header/pagin-header.component';
import { PagerComponent } from './components/pager/pager.component';
import { OrderTotalsComponent } from './components/order-totals/order-totals.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PaginHeaderComponent, PagerComponent, OrderTotalsComponent],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports: [
     PaginationModule,
     PaginHeaderComponent,
     PagerComponent,
     CarouselModule,
     OrderTotalsComponent,
     ReactiveFormsModule
   ]
})
export class SharedModule { }
