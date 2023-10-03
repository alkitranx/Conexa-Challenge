import { Injectable } from '@nestjs/common';
import { RegisterRepository } from './register.repository';
import { RegisterUserDto } from './dto/registerUserDto.dto';

@Injectable()
export class RegisterService {
  constructor(private readonly registerRepository: RegisterRepository) {}
  async RegisterUserService(payload: RegisterUserDto) {
    console.log('payload en servicio', payload);
    await this.registerRepository.registerUser(payload);
  }
}
