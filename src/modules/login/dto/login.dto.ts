import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class LoginDto {
  @ApiProperty({
    description: 'email con el que se registro el usuario',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  @ApiProperty({
    description: 'password del usuario',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
