import mongoose, { Document, Schema } from "mongoose";

export interface IProduct extends Document {
  description: string;
  name: string;
}

const ProductSchema: Schema = new Schema({
  description: { type: Schema.Types.String, required: false },
  name: { type: Schema.Types.String, required: true },
});

export default mongoose.model<IProduct>("Product", ProductSchema);
