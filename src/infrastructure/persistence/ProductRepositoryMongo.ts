import { Product } from "../../core/entities/Product";

export interface ProductRepositoryMongo {
    save(product: Product): Promise<Product>;
    getAll(): Promise<Product[]>;
}
