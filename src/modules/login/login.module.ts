import { Module } from '@nestjs/common';
import { BcryptModule } from '../../infrastructure/bcrypt/bcrypt.module';
import { LoginController } from './login.controller';
import { LoginRepository } from './login.repository';
import { LoginService } from './login.service';
import { AccessTokenModule } from '../authorization/access-token.module';
import {AccessTokenService} from "../authorization/access-token.service";

@Module({
  imports: [BcryptModule, AccessTokenModule],
  controllers: [LoginController],
  providers: [LoginRepository, LoginService],
  exports: [LoginRepository],
})
export class LoginModule {}
