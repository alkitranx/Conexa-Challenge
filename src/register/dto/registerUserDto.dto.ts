import {
  IsAlphanumeric,
  IsEmail,
  IsNotEmpty,
  IsString, Length,
  Validate,
} from 'class-validator';
import { CheckDuplicatePassword } from '../custom-validation/checkDuplicatePassword';
import { CustomCheckPasswordFormat } from '../custom-validation/checkPasswordFormat';

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
  @Length(7, 64)
  @IsString()
  @Validate(CustomCheckPasswordFormat)
  password: string;
  @IsNotEmpty()
  @IsString()
  @Length(7, 64)
  @CheckDuplicatePassword('password', {
    message: 'Registered passwords do not match',
  })
  repeatPassword: string;
}
