import { IProduct } from "../product.model";

export interface IProductRepository {
  findById(id: string): Promise<IProduct | null>;
  findAll(): Promise<IProduct[]>;
}
