import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './register/register.module';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { BcryptModule } from './infrastructure/bcrypt/bcrypt.module';
import { LoginModule } from './login/login.module';
import { UsersModule } from './global-module/authorization/user-authorization/user-jwt.module';
import { AuthorizationModule } from './global-module/authorization/authorization.module';

@Module({
  imports: [
    RegisterModule,
    PrismaModule,
    BcryptModule,
    LoginModule,
    UsersModule,
    AuthorizationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
