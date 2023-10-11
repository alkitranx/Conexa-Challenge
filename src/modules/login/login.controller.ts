import { Controller, Post, Body } from '@nestjs/common';
import { LoginService } from './login.service';
import { ApiBody } from '@nestjs/swagger';
import { LoginDto } from './dto/login.dto';


@Controller('auth')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}
  @ApiBody({ type: LoginDto })
  @Post('login')
  async registerUser(@Body() payload: any) {
    return this.loginService.login(payload);
  }
}
