import { Module } from '@nestjs/common';
import { RegisterController } from './register.controller';
import { RegisterRepository } from './register.repository';
import { RegisterService } from './register.service';

@Module({
  imports: [],
  controllers: [RegisterController],
  providers: [RegisterRepository, RegisterService],
  exports: [RegisterRepository],
})
export class RegisterModule {}
