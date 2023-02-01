import { ContainerModule } from "inversify";
import { TYPES } from "./types";

// Services
import { ProductService } from "../modules/product/product.service";
import { IProductService } from "../modules/product/interfaces/IProduct.service";
import { OrderService } from "../modules/order/order.service";
import { IOrderService } from "../modules/order/interfaces/IOrder.service";

// Repositories
import { ProductRepository } from "../modules/product/product.repository";
import { IProductRepository } from "../modules/product/interfaces/IProduct.repository";
import { OrderRepository } from "../modules/order/order.repository";
import { IOrderRepository } from "../modules/order/interfaces/IOrder.repository";

export const bindings = new ContainerModule((bind) => {
  bind<IProductService>(TYPES.IProductService).to(ProductService);
  bind<IOrderService>(TYPES.IOrderService).to(OrderService);

  bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository);
  bind<IOrderRepository>(TYPES.IOrderRepository).to(OrderRepository);
});
