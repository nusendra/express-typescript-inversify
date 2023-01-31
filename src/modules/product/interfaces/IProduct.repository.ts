import { CreateProductDto } from "../dtos/create-product.dto";
import { IProduct } from "../product.model";

export interface IProductRepository {
  create(entity: CreateProductDto): Promise<IProduct>;
}
