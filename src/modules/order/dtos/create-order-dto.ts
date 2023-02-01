import {
  ArrayNotEmpty,
  IsNotEmpty,
  IsInt,
  Min,
  IsString,
} from "class-validator";
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

export class RequestCreateOrderDto {
  @ArrayNotEmpty()
  @Type(() => ProductItem)
  items: [ProductItem];
}

export class CreateOrderDto extends RequestCreateOrderDto {
  @IsString()
  customerId?: string;
}
