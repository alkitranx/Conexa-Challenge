import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterUserDto } from './dto/registerUserDto.dto';

@Controller('auth')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  async registerUser(@Body() payload: RegisterUserDto) {
    return this.registerService.RegisterUserService(payload);
  }
}
