import { ContainerModule } from "inversify";
import { TYPES } from "./types";

import { GraphqlServer } from "../graphql";
import { Server } from "../server";

import { ProductResolver } from "../modules/product/product.resolver";

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

// Middlewares
export const bindings = new ContainerModule((bind) => {
  bind<GraphqlServer>(TYPES.GraphQLServer).to(GraphqlServer);
  bind<Server>(TYPES.Server).to(Server);

  bind<ProductResolver>(TYPES.ProductResolver).to(ProductResolver);

  bind<IProductService>(TYPES.IProductService).to(ProductService);
  bind<IOrderService>(TYPES.IOrderService).to(OrderService);

  bind<IProductRepository>(TYPES.IProductRepository).to(ProductRepository);
  bind<IOrderRepository>(TYPES.IOrderRepository).to(OrderRepository);
});
