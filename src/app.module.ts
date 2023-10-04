import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { BcryptModule } from './infrastructure/bcrypt/bcrypt.module';
import { LoginModule } from './login/login.module';

@Module({
  imports: [RegisterModule, PrismaModule, BcryptModule, LoginModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
