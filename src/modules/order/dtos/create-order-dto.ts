import { IsNotEmpty, IsInt, Min, IsString } from "class-validator";
import { Type } from "class-transformer";

class ProductItem {
  @IsNotEmpty()
  @IsInt()
  @Min(1)
  amount: number;

  @IsNotEmpty()
  @IsInt()
  price: number;

  @IsNotEmpty()
  @IsString()
  productId: string;
}

export class CreateOrderDto {
  @IsNotEmpty()
  @IsString()
  customerId: string;

  @IsNotEmpty()
  @Type(() => ProductItem)
  items: [ProductItem];
}
