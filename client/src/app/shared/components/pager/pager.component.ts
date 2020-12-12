import { Component, Input, OnInit,Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
 @Input() totalCount: number;
 @Input() pageSize: number;
 @Output() pageChanged;
  constructor() {
    this.totalCount = 0;
    this.pageSize = 0;
    this.pageChanged = new EventEmitter<number>();
   }

  ngOnInit(): void {
  }

  onPageChange(event: any){
    //console.log(event)
    this.pageChanged.emit(event.page);
  }

}
