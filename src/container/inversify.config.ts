import { ContainerModule } from "inversify";
import { TYPES } from "./types";

// Services
import { ProductService } from "../modules/product/product.service";
import { IProductService } from "../modules/product/interfaces/IProduct.service";

// Repositories
import { ProductRepository } from "../modules/product/product.repository";
import { IProductRepository } from "../modules/product/interfaces/IProduct.repository";

export const bindings = new ContainerModule((bind) => {
  bind<IProductService>(TYPES.IProductService).to(ProductService);
  bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository);
});
