import hello from "./hello";
import rootQuerySchema from "./query";
import product from "../modules/product/product.schema";

export const aggregatedSchemas: any[] = [rootQuerySchema, hello, product];
