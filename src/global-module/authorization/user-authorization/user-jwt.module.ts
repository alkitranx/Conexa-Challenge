import { Module, Global } from '@nestjs/common';
import { AuthorizationModule } from '../authorization.module';
import { UserJwtStrategy } from './user-jwy.strategy';

@Global()
@Module({
  imports: [AuthorizationModule],
  providers: [UserJwtStrategy],
})
export class UsersModule {}
