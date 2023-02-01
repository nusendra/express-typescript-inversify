import { CreateOrderDto } from "../dtos/create-order-dto";
import { IOrder } from "../order.model";

export interface IOrderService {
  getById(id: string): Promise<IOrder | null>;
  getAll(): Promise<IOrder[]>;
  create(entity: CreateOrderDto): Promise<IOrder>;
}
