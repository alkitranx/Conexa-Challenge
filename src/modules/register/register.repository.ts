import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/prisma/prisma.service';

@Injectable()
export class RegisterRepository {
  constructor(private readonly prismaService: PrismaService) {}
  async registerUser(createUserData: any) {
    return this.prismaService.user.create({ data: createUserData });
  }

  async findUserByEmail(data: string) {
    return this.prismaService.user.findMany({
      where: { email: data },
      select: { email: true },
    });
  }
}
