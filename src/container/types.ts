export const TYPES = {
  // Server
  GraphQLServer: Symbol.for("GraphQLServer"),
  Server: Symbol.for("Server"),

  ProductResolver: Symbol.for("ProductResolver"),

  // Middlewares
  AuthMiddleware: Symbol.for("AuthMiddleware"),

  // modules
  IProductService: Symbol.for("IProductService"),
  IProductRepository: Symbol.for("IProductRepository"),
  IOrderService: Symbol.for("IOrderService"),
  IOrderRepository: Symbol.for("IOrderRepository"),
};
