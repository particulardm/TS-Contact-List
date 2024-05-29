import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UsersService {
  async create(createUserDto: Prisma.UserCreateInput) {
    const prisma = new PrismaClient();
    const salt = 10;
    const pass = createUserDto.password;
    const hash = await bcrypt.hash(pass, salt);
    console.log(hash);
    createUserDto.password = hash;

    const user = await prisma.user.create({
      data: createUserDto
    });
    return user;
  }


}
