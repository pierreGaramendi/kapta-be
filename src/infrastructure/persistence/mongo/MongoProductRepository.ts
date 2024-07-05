import { ILocalProduct, Product } from "../../../core/entities/Product";
import { ProductRepositoryMongo } from "../ProductRepositoryMongo";
import ProductModel from "./ProductModel";

export class MongoProductRepository implements ProductRepositoryMongo {
  async save(product: Product): Promise<ILocalProduct> {
    const createdProduct = new ProductModel({
      name: product.name,
      price: product.price,
    });
    const savedProduct = await createdProduct.save();
    return { id: savedProduct.id, name: savedProduct.name, price: savedProduct.price };
  }

  async getAll(): Promise<ILocalProduct[]> {
    const products = await ProductModel.find({});
    return products.map((product) => {
      return { id: product.id, name: product.name, price: product.price };
    });
  }
}
