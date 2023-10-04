import { Controller, Post, Body } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterUserDto } from './dto/input/registerUserDto.dto';

@Controller('user')
export class RegisterController {
  constructor(private readonly registerService: RegisterService) {}

  @Post('register')
  async registerUser(@Body() payload: RegisterUserDto) {
    return this.registerService.RegisterUserService(payload);
  }
}
