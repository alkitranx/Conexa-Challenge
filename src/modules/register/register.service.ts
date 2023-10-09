import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterRepository } from './register.repository';
import { RegisterUserDto } from './dto/input/registerUserDto.dto';
import { BcryptService } from '../../libs/bcrypt/bcrypt.service';

@Injectable()
export class RegisterService {
  constructor(
    private readonly registerRepository: RegisterRepository,
    private bcryptService: BcryptService,
  ) {}
  async RegisterUserService(payload: RegisterUserDto): Promise<any> {
    delete payload.repeatPassword;
    const { password } = payload;
    const findUserByEmail = await this.registerRepository.findUserByEmail(
      payload.email,
    );
    if (findUserByEmail.length > 0) {
      throw new BadRequestException('This email is already registered');
    }
    payload.password = await this.bcryptService.createHash(password);
    await this.registerRepository.registerUser(payload);
    return { message: 'Successful registration' };
  }
}
