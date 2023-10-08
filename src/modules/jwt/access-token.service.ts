import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AccessTokenService {
  constructor(private accessToken: JwtService) {}

  generateToken(userData: any): string {
    const payload = {
      sub: userData.id.toString(),
      email: userData.email,
      role: userData.role,
    };
    return this.accessToken.sign(payload);
  }
}
