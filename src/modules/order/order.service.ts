import { inject, injectable } from "inversify";
import { TYPES } from "../../container/types";
import { IOrderService } from "./interfaces/IOrder.service";
import { IOrderRepository } from "./interfaces/IOrder.repository";
import { IOrder } from "./order.model";
import { CreateOrderDto } from "./dtos/create-order-dto";

@injectable()
export class OrderService implements IOrderService {
  constructor(
    @inject(TYPES.IOrderRepository) private readonly orderRepo: IOrderRepository
  ) {}

  public async getById(id: string): Promise<IOrder | null> {
    const result = await this.orderRepo.findById(id);
    return result;
  }

  public async getAll(): Promise<IOrder[]> {
    const result = await this.orderRepo.findAll();
    return result;
  }

  public async create(dto: CreateOrderDto): Promise<IOrder> {
    const result = await this.orderRepo.create(dto);
    return result;
  }
}
