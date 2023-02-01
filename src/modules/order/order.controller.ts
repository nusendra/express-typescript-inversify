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
import { CreateOrderDto, RequestCreateOrderDto } from "./dtos/create-order-dto";
import { authMiddleware } from "../../middlewares/auth";
import {
  validateBody,
  validateParam,
} from "../../middlewares/request-validator";

@controller("/orders", authMiddleware())
export class OrderController {
  constructor(
    @inject(TYPES.IOrderService) private readonly orderService: IOrderService
  ) {}

  @httpGet("/:id", validateParam(idDto))
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

  @httpPost("/", validateBody(RequestCreateOrderDto))
  async create(
    @requestBody() body: RequestCreateOrderDto,
    req: Request,
    res: Response
  ) {
    const customerId = req.app.locals.userInfo.user_id;
    const payload: CreateOrderDto = body;
    payload.customerId = customerId;

    const result = await this.orderService.create(body);
    return res.status(200).json(result);
  }
}
