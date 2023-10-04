import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { AuthorizationService } from '../authorization.service';

@Injectable()
export class UserJwtStrategy extends PassportStrategy(Strategy, 'user-jwt') {
  constructor(private authorizationService: AuthorizationService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET_USER,
    });
  }

  async validate(payload: any) {
    console.log('payload',payload)
    const roles = await this.authorizationService.getRoles(payload.email);
    console.log('dddddd', roles)

    return {
      email: payload.email,
      roles: roles,
    };
  }
}
