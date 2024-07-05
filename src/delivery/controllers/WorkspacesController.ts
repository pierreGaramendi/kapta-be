import { Request, Response } from "express";
import { InMemoryProductRepository } from "../../infrastructure/persistence/InMemoryProductRepository";
import { CreateProductUseCase } from "../../core/use_cases/CreateProductUseCase";
import { GetProductsUseCase } from "../../core/use_cases/GetProductsUseCase";
import { MongoProductRepository } from "../../infrastructure/persistence/mongo/MongoProductRepository";

const productRepository = new InMemoryProductRepository();

const mongoProductRepository = new MongoProductRepository();
//const createProductMongoUseCase = new CreateProductUseCase(mongoProductRepository);

const createProductUseCase = new CreateProductUseCase(productRepository);
const getProductsUseCase = new GetProductsUseCase(productRepository);

export const createProductLocal = async (req: Request, res: Response): Promise<void> => {
    const { name, price } = req.body;
    const product = await createProductUseCase.execute(name, price);
    res.json({ id: product.id, name: product.name, price: product.price });
};

export const createProductMongo = async (req: Request, res: Response): Promise<void> => {
    const { name, price } = req.body;
    const product = await createProductUseCase.execute(name, price);
    res.json({ id: product.id, name: product.name, price: product.price });
};

export const getProducts = async (req: Request, res: Response): Promise<void> => {
    const products = await getProductsUseCase.execute();
    res.json(products);
};