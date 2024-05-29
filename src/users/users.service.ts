import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { BcryptService } from 'src/bcrypt/bcrypt.service';


@Injectable()
export class UsersService {
  constructor(private readonly bcryptService: BcryptService){};

  async create(createUserDto: Prisma.UserCreateInput) {
    const prisma = new PrismaClient();
    const pass = createUserDto.password;
    const hash = await this.bcryptService.hash(pass);
    createUserDto.password = hash;

    const user = await prisma.user.create({
      data: createUserDto
    });
    return user;
  }
}
