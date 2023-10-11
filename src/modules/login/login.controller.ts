import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async registerUser(@Body() payload: any) {
    return this.loginService.login(payload);
  }
}
