import { Type } from "class-transformer";

export class idDto {
  @Type(() => String)
  id: string;
}
