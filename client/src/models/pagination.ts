import { IProduct } from './product';

export interface IPagination {
    pageIndex: number;
    pageSize: number;
    coutn: number;
    data: IProduct[];
  }
  