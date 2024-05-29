import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class UsersService {
  async create(createUserDto: Prisma.UserCreateInput) {
    const prisma = new PrismaClient();
    const user = await prisma.user.create({
      data: createUserDto
    });
    return user;
  }


}
