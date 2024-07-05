import { ILocalProduct } from "../../core/entities/Product";

export interface ProductRepository {
  save(product: ILocalProduct): ILocalProduct;
  getAll(): ILocalProduct[];
}
