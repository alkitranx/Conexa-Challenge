import { Module } from '@nestjs/common';
import { BcryptModule } from '../infrastructure/bcrypt/bcrypt.module';
import { LoginController } from './login.controller';
import { LoginRepository } from './login.repository';
import { LoginService } from './login.service';

@Module({
  imports: [BcryptModule],
  controllers: [LoginController],
  providers: [LoginRepository, LoginService],
  exports: [LoginRepository],
})
export class LoginModule {}
