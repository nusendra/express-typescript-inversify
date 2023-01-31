import { TYPES } from "../../container/types";
import { inject } from "inversify";
import { Request, Response } from "express";
import {
  controller,
  httpGet,
  httpPost,
  queryParam,
  requestBody,
} from "inversify-express-utils";
import { CreateProductDto } from "./dtos/create-product.dto";
import { IProductService } from "./interfaces/IProduct.service";

@controller("/products")
export class ProductController {
  constructor(
    @inject(TYPES.IProductService)
    private readonly productService: IProductService
  ) {}

  @httpGet("/")
  getAll(req: Request, res: Response) {
    const result = "test";
    return res.status(200).json(result);
  }

  @httpPost("/")
  async create(
    @requestBody() body: CreateProductDto,
    req: Request,
    res: Response
  ) {
    const result = await this.productService.create(body);
    return res.status(200).json(result);
  }
}
