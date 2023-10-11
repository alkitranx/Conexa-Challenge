import {IsMongoId, IsNotEmpty} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class ParamsInputDto {
  @ApiProperty()
  @IsMongoId()
  @IsNotEmpty()
  id: string;
}
