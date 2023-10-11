import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString, Length,
  Validate,
} from 'class-validator';
import { CheckDuplicatePassword } from '../../custom-validation/checkDuplicatePassword';
import { CustomCheckPasswordFormat } from '../../custom-validation/checkPasswordFormat';
import {ApiProperty} from "@nestjs/swagger";

export class RegisterUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsAlphanumeric()
  name: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsAlphanumeric()
  last_name: string;
  @ApiProperty()
  @IsNotEmpty()
  @Length(8, 64)
  @IsString()
  @Validate(CustomCheckPasswordFormat)
  password: string;
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  @Length(8, 64)
  @CheckDuplicatePassword('password', {
    message: 'Registered passwords do not match',
  })
  repeatPassword: string;
}
