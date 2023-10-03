import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { BcryptModule } from './infrastructure/bcrypt/bcrypt.module';

@Module({
  imports: [RegisterModule, PrismaModule, BcryptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
