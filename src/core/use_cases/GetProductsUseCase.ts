import { ILocalProduct, Product } from "../entities/Product";
import { ProductRepository } from "../../infrastructure/persistence/ProductRepository";

export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(): Promise<ILocalProduct[]> {
    return await this.productRepository.getAll();
  }
}
