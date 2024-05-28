import { Injectable } from '@nestjs/common';

import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

@Injectable()
export class UsersService {
  async create(createUserDto: Prisma.UserCreateInput) {
    const user = await prisma.user.create({
      data: createUserDto
    });
    return user;
  }



  // findAll() {
  //   return `This action returns all users`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
