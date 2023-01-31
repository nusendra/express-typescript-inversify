import { injectable } from "inversify";
import { CreateProductDto } from "./dtos/create-product.dto";
import { IProductRepository } from "./interfaces/IProduct.repository";
import Product, { IProduct } from "./product.model";

@injectable()
export class ProductRepository implements IProductRepository {
  public async create(entity: CreateProductDto): Promise<IProduct> {
    const result = await Product.create(entity);
    return result;
  }
}
