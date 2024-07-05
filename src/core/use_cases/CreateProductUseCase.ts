import { ProductRepository } from "../../infrastructure/persistence/ProductRepository";
import { InterfaceID } from "../entities/General.model";
import { IProduct, Product, ILocalProduct } from "../entities/Product";

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}
  async execute(name: string, price: number): Promise<ILocalProduct> {
    const product: ILocalProduct = { id: null, name, price };
    return await this.productRepository.save(product);
  }
}
