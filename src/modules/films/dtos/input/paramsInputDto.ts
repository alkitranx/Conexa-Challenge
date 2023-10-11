import { IsMongoId } from 'class-validator';

export class ParamsInputDto {
  @IsMongoId()
  id: string;
}
