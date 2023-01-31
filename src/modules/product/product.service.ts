import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types";
import { IProductRepository } from "./interfaces/IProduct.repository";
import { IProductService } from "./interfaces/IProduct.service";
import { IProduct } from "./product.model";

@injectable()
export class ProductService implements IProductService {
  constructor(
    @inject(TYPES.IProductRepository)
    private readonly productRepo: IProductRepository
  ) {}

  public async getById(id: string): Promise<IProduct | null> {
    const result = await this.productRepo.findById(id);
    return result;
  }

  public async getAll(): Promise<IProduct[]> {
    const result = await this.productRepo.findAll();
    return result;
  }
}
