import {v4 as uuid} from 'uuid';

export interface IBasket {
    id: string;
    items: IBasketItem[];
  }
  
export interface IBasketItem {
    id: number;
    productName: string;
    price: number;
    quantity: number;
    pictureUrl: string;
    brand: string | undefined;
    type: string | undefined;
  }

  export class Basket implements IBasket{
      id= uuid();
      items: IBasketItem[];

      constructor(){
          this.items = [];
      }
  }