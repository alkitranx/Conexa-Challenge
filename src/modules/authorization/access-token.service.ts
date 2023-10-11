import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
@Injectable()
export class AccessTokenService {
  constructor(private accessToken: JwtService) {}

  generateToken(userData: any): string {
    console.log('userdata', userData);
    const payload = {
      id: userData.id,
      email: userData.email,
      id_role: userData.id_role,
    };
    return this.accessToken.sign(payload);
  }
}
