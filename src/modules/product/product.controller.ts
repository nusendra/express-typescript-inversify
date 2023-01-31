import { TYPES } from "../../container/types";
import { inject } from "inversify";
import { Request, Response } from "express";
import { controller, httpGet, requestParam } from "inversify-express-utils";
import { IProductService } from "./interfaces/IProduct.service";
import { idDto } from "../../shared/id.dto";

@controller("/products")
export class ProductController {
  constructor(
    @inject(TYPES.IProductService)
    private readonly productService: IProductService
  ) {}

  @httpGet("/:id")
  async getById(@requestParam() param: idDto, req: Request, res: Response) {
    const { id } = param;
    const result = await this.productService.getById(id);
    return res.status(200).json(result);
  }

  @httpGet("/")
  async getAll(req: Request, res: Response) {
    const result = await this.productService.getAll();
    return result;
  }
}
