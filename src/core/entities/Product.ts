import { InterfaceID } from "./General.model";

export class Product {
  constructor(
    /*         public id: number | null, */
    public name: string,
    public price: number
  ) {}
}

export interface IProduct {
  name: string;
  price: number;
}

export interface ILocalProduct extends IProduct, InterfaceID {}