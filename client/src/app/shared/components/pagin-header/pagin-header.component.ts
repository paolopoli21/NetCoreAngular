import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagin-header',
  templateUrl: './pagin-header.component.html',
  styleUrls: ['./pagin-header.component.css']
})
export class PaginHeaderComponent implements OnInit {

  @Input() pageNumber: number;
  @Input() pageSize: number;
  @Input() totalCount: number;

  constructor() {
    this.pageNumber = 0;
    this.pageSize = 0;
    this.totalCount = 0;
   }

  ngOnInit(): void {

  }

}
