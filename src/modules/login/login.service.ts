import { Injectable } from '@nestjs/common';

import { BcryptService } from '../../infrastructure/bcrypt/bcrypt.service';
import { LoginRepository } from './login.repository';
import { BasicResponseTemplate } from '../../libs/response-templates';
import { AccessTokenService } from '../jwt/access-token.service';

@Injectable()
export class LoginService {
  constructor(
    private readonly loginRepository: LoginRepository,
    private readonly bcryptService: BcryptService,
    private readonly accessToken: AccessTokenService,
  ) {}

  private async getToken(userInfo) {
    return this.accessToken.generateToken(userInfo);
  }
  async login(authenticationDto: any) {
    const responseTemplate = new BasicResponseTemplate({
      success: false,
      message: { text: '' },
    });
    const findUserByEmail = await this.loginRepository.findUserByEmail(
      authenticationDto.email,
    );
    const comparePassword = await this.bcryptService.compare(
      authenticationDto.password,
      findUserByEmail.password,
    );
    if (!findUserByEmail) {
      responseTemplate.message.text =
        'The data entered is not correct. Please try again.';
    }
    if (comparePassword) {
      responseTemplate.success = true;
      const token = this.accessToken.generateToken(findUserByEmail);
      return new BasicResponseTemplate({
        success: true,
        message: { text: 'Successful login' },
        data: {
          access_token: token,
        },
      });
    }
    return responseTemplate;
  }
}
