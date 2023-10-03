import { BadRequestException, Injectable } from '@nestjs/common';
import { RegisterRepository } from './register.repository';
import { RegisterUserDto } from './dto/registerUserDto.dto';
import { BcryptService } from '../infrastructure/bcrypt/bcrypt.service';

@Injectable()
export class RegisterService {
  constructor(
    private readonly registerRepository: RegisterRepository,
    private bcryptService: BcryptService,
  ) {}
  async RegisterUserService(payload: RegisterUserDto) {
    delete payload.repeatPassword;
    const { password } = payload;
    const findUserByEmail = await this.registerRepository.findUserByEmail(
      payload.email,
    );
    if (findUserByEmail.length > 0) {
      throw new BadRequestException('This email is already registered');
    }
    payload.password = await this.bcryptService.createHash(password);
    return await this.registerRepository.registerUser(payload);
  }
}
