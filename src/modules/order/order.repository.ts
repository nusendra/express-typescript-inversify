import { injectable } from "inversify";
import { IOrderRepository } from "./interfaces/IOrder.repository";
import { CreateOrderDto } from "./dtos/create-order-dto";
import Order, { IOrder } from "./order.model";

@injectable()
export class OrderRepository implements IOrderRepository {
  public async findById(id: string): Promise<IOrder | null> {
    const result: IOrder | null = await Order.findById(id);
    return result;
  }

  public async findAll(): Promise<IOrder[]> {
    const result: IOrder[] = await Order.find();
    return result;
  }

  public async create(entity: CreateOrderDto): Promise<IOrder> {
    const result = await Order.create(entity);
    return result;
  }
}
