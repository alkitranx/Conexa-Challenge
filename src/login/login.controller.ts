import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { LoginService } from './login.service';
import { UserJwtGuard } from '../global-module/authorization/user-authorization/user-jwt.guard';

@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('login')
  async registerUser(@Body() payload: any) {
    return this.loginService.login(payload);
  }
}
