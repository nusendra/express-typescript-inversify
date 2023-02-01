import mongoose, { Document, Schema } from "mongoose";
import { IProduct } from "../product/product.model";

export interface IProductItem extends IProduct {
  amount: number;
  price: number;
}

export interface IOrder extends Document {
  customerId: string;
  items: [IProductItem];
}

const OrderSchema: Schema = new Schema(
  {
    customerId: { type: Schema.Types.String, required: true },
    items: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        amount: { type: Schema.Types.Number, required: true },
        price: { type: Schema.Types.Number, required: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model<IOrder>("Order", OrderSchema);
