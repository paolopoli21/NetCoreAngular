import { ThrowStmt } from '@angular/compiler';

export class ShopParams {
    public brandId: number;
    public typeId: number;
    public sort: string;
    public pageNumber: number;
    public pageSize: number;
    public search: string;
  constructor(){
      this.brandId = 0;
      this.typeId = 0;
      this.sort = 'name';
      this.pageNumber = 1;
      this.pageSize = 6;
      this.search = "";
  }
}