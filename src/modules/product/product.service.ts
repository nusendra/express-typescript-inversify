import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types";
import { CreateProductDto } from "./dtos/create-product.dto";
import { IProductRepository } from "./interfaces/IProduct.repository";
import { IProductService } from "./interfaces/IProduct.service";
import { IProduct } from "./product.model";

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject(TYPES.IProductRepository)
    private readonly productRepo: IProductRepository
  ) {}

  public async create(dto: CreateProductDto): Promise<IProduct> {
    const result = await this.productRepo.create(dto);
    return result;
  }
}
