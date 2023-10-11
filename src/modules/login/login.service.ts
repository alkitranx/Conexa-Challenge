import { Injectable } from '@nestjs/common';
import { BcryptService } from '../../libs/bcrypt/bcrypt.service';
import { LoginRepository } from './login.repository';
import { BasicResponseTemplate } from '../../libs/response-templates';

import { AccessTokenService } from '../authorization/access-token.service';

interface UserInfo {
  id: number;
  email: string;
  id_role: number;
}

interface AuthenticationDto {
  email: string;
  password: string;
}

@Injectable()
export class LoginService {
  constructor(
    private readonly loginRepository: LoginRepository,
    private readonly bcryptService: BcryptService,
    private readonly accessToken: AccessTokenService,
  ) {}

  private async getToken(userInfo: UserInfo): Promise<string> {
    return this.accessToken.generateToken(userInfo);
  }
  async login(
    authenticationDto: AuthenticationDto,
  ): Promise<BasicResponseTemplate> {
    const responseTemplate = new BasicResponseTemplate({
      success: false,
      message: { text: 'The data entered is not correct. Please try again.' },
    });

    // Busca al usuario en la base de datos por dirección de correo electrónico
    const findUserByEmail = await this.loginRepository.findUserByEmail(
      authenticationDto.email,
    );

    if (findUserByEmail === null) {
      // Si no se encuentra al usuario, se devuelve un mensaje de error
      responseTemplate.message.text =
        'The data entered is not correct. Please try again.';
    } else {
      // Si se encuentra al usuario, se compara la contraseña proporcionada con la almacenada en la base de datos
      const comparePassword = await this.bcryptService.compare(
        authenticationDto.password,
        findUserByEmail.password,
      );

      if (comparePassword) {
        // Si la contraseña coincide, se genera un token JWT y se devuelve el resultado exitoso
        responseTemplate.success = true;
        const dataToken: UserInfo = {
          id: findUserByEmail.id,
          email: findUserByEmail.email,
          id_role: findUserByEmail.id_role,
        };
        const token = await this.getToken(dataToken);
        return new BasicResponseTemplate({
          success: true,
          message: { text: 'Successful login' },
          data: {
            access_token: token,
          },
        });
      }
    }

    return responseTemplate;
  }
}
