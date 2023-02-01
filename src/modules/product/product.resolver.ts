import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types";
import { IProductService } from "./interfaces/IProduct.service";

@injectable()
export class ProductResolver {
  public resolver;

  constructor(
    @inject(TYPES.IProductService)
    private productService: IProductService
  ) {
    this.resolver = {
      product: this.getProducts,
    };
  }

  async getProducts() {
    const result = await this.productService.getAll();
    return result;
  }

  private getUser() {
    return "asdf";
  }

  private getUserProps() {
    return 123;
  }
}

/* export const productResolver = () => {
  return {
    name: "test",
  };
}; */
