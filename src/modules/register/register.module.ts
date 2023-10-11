import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterRepository } from './register.repository';
import { RegisterService } from './register.service';
import { BcryptModule } from '../../libs/bcrypt/bcrypt.module';

@Module({
  imports: [BcryptModule],
  controllers: [RegisterController],
  providers: [RegisterRepository, RegisterService],
  exports: [RegisterRepository],
})
export class RegisterModule {}
