import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  name: string;
}

const ProductSchema: Schema = new Schema({
  name: { type: Schema.Types.String, required: true },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
