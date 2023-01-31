import { CreateProductDto } from "../dtos/create-product.dto";
import { IProduct } from "../product.model";

export interface IProductService {
  create(dto: CreateProductDto): Promise<IProduct>;
}
