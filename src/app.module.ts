import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RegisterModule } from './modules/register/register.module';
import { PrismaModule } from './infrastructure/prisma/prisma.module';
import { BcryptModule } from './libs/bcrypt/bcrypt.module';
import { LoginModule } from './modules/login/login.module';
import { UsersModule } from './global-module/authorization/user-authorization/user-jwt.module';
import { AuthorizationModule } from './global-module/authorization/authorization.module';
import { ExternalApiModule } from './modules/conection-external-api/external-api.module';
import { FilmsModule } from './modules/films/films.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://hender:hender12345@cluster0.wbjmma3.mongodb.net/?retryWrites=true&w=majority',
    ),
    RegisterModule,
    PrismaModule,
    BcryptModule,
    LoginModule,
    UsersModule,
    AuthorizationModule,
    ExternalApiModule,
    FilmsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
