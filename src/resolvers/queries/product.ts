import { ProductResolver } from "../../modules/product/product.resolver";
import container from "../../container/container";
import { TYPES } from "@/container/types";

const { resolver } = container.get<ProductResolver>(TYPES.ProductResolver);

export const ProductQuery = {
  product: resolver.product,
};
