import { TYPES } from "../../container/types";
import { inject } from "inversify";
import { Request, Response } from "express";
import {
  controller,
  httpGet,
  requestParam,
  requestBody,
  httpPost,
} from "inversify-express-utils";
import { IOrderService } from "./interfaces/IOrder.service";
import { idDto } from "../../shared/id.dto";
import { CreateOrderDto } from "./dtos/create-order-dto";

@controller("/orders")
export class OrderController {
  constructor(
    @inject(TYPES.IOrderService) private readonly orderService: IOrderService
  ) {}

  @httpGet("/:id")
  async getById(@requestParam() param: idDto, req: Request, res: Response) {
    const { id } = param;
    const result = await this.orderService.getById(id);
    return res.status(200).json(result);
  }

  @httpGet("/")
  async getAll(req: Request, res: Response) {
    const result = await this.orderService.getAll();
    return result;
  }

  @httpPost("/")
  async create(
    @requestBody() body: CreateOrderDto,
    req: Request,
    res: Response
  ) {
    const result = await this.orderService.create(body);
    return res.status(200).json(result);
  }
}
