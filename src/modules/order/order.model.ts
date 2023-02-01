import mongoose, { Document, Schema } from "mongoose";
import { IProduct } from "../product/product.model";

export interface IProductItem extends IProduct {
  amount: number;
  price: number;
}

export interface IOrder extends Document {
  customerId: string;
  products: [IProductItem];
}

const OrderSchema: Schema = new Schema(
  {
    customerId: { type: Schema.Types.String, required: true },
    items: [
      {
        product: { type: Schema.Types.ObjectId, ref: "Product" },
        amount: { type: Schema.Types.Number },
        price: { type: Schema.Types.Number },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);