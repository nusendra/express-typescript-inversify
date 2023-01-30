import { Request, Response } from "express";
import { controller, httpGet, queryParam } from "inversify-express-utils";

@controller("/products")
export class ProductController {
  @httpGet("/")
  getAll(req: Request, res: Response) {
    const result = "test";
    return res.status(200).json(result);
  }
}
