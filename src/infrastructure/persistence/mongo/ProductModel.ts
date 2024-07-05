import mongoose, { Schema, Document } from "mongoose";
import { IProduct, Product } from "../../../core/entities/Product";

interface ProductDocument extends Document,IProduct {}

const ProductSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
});

export default mongoose.model<ProductDocument>("Product", ProductSchema);
