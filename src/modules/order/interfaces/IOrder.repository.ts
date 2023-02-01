import { CreateOrderDto } from "../dtos/create-order-dto";
import { IOrder } from "../order.model";

export interface IOrderRepository {
  findById(id: string): Promise<IOrder | null>;
  findAll(): Promise<IOrder[]>;
  create(entity: CreateOrderDto): Promise<IOrder>;
}
