import { BadRequestException, Injectable } from '@nestjs/common';

import { BcryptService } from '../infrastructure/bcrypt/bcrypt.service';
import { LoginRepository } from './login.repository';
import { BasicResponseTemplate } from '../libs/response-templates';

@Injectable()
export class LoginService {
  constructor(
    private readonly loginRepository: LoginRepository,
    private bcryptService: BcryptService,
  ) {}
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
    }
    return responseTemplate;
  }
}
