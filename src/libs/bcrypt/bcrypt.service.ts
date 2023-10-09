import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

@Injectable()
export class BcryptService {
  readonly saltOrRounds = 12;

  async createHash(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltOrRounds);
  }

  async compare(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
