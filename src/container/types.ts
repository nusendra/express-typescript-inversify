export const TYPES = {
  // Server
  GraphQLServer: Symbol.for("GraphQLServer"),
  Server: Symbol.for("Server"),

  // Middlewares
  AuthMiddleware: Symbol.for("AuthMiddleware"),

  // modules
  IProductService: Symbol.for("IProductService"),
  IProductRepository: Symbol.for("IProductRepository"),
  IOrderService: Symbol.for("IOrderService"),
  IOrderRepository: Symbol.for("IOrderRepository"),
};
