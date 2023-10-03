import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsAlphanumeric()
  name: string;
  @IsNotEmpty()
  @IsAlphanumeric()
  last_name: string;
  @IsNotEmpty()
  @IsString()
  password: string;
}
