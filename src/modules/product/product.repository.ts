import { injectable } from "inversify";
import { IProductRepository } from "./interfaces/IProduct.repository";
import Product, { IProduct } from "./product.model";

@injectable()
export class ProductRepository implements IProductRepository {
  public async findById(id: string): Promise<IProduct | null> {
    const result: IProduct | null = await Product.findById(id);
    return result;
  }

  public async findAll(): Promise<IProduct[]> {
    const result: IProduct[] = await Product.find();
    return result;
  }
}
