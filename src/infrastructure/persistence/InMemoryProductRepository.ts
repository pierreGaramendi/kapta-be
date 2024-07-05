import { ILocalProduct, Product } from "../../core/entities/Product";
import { ProductRepository } from "./ProductRepository";

export class InMemoryProductRepository implements ProductRepository {
  private products: ILocalProduct[] = [];
  private nextId: number = 1;

  save(product: ILocalProduct): ILocalProduct {
    product.id = this.nextId++;
    this.products.push(product);
    return product;
  }

  getAll(): ILocalProduct[] {
    return this.products;
  }
}
