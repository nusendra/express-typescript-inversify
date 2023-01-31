import { IProduct } from "../product.model";

export interface IProductService {
  getById(id: string): Promise<IProduct | null>;
  getAll(): Promise<IProduct[]>;
}
