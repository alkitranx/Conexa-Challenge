import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthorizationService } from '../authorization.service';

@Injectable()
export class UserJwtStrategy extends PassportStrategy(
  Strategy,
  'user-authorization',
) {
  constructor(private authorizationService: AuthorizationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_USER,
    });
  }

  async validate(payload: any) {
    const user = await this.authorizationService.findUser(payload.email);
    return { id: user.id, email: user.email, id_role: user.id_role };
  }
}
