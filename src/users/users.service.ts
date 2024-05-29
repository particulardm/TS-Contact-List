import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { BcryptService } from 'src/bcrypt/bcrypt.service';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UsersService {
  constructor(private readonly bcryptService: BcryptService,
              private readonly jwtService: JwtService
  ){};

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
  
  async login(email: string, pass: string) {
    const prisma = new PrismaClient();
    const user = await prisma.user.findUnique({
      where: {
        email
      }
    })
    if (!await this.bcryptService.compare(pass, user.password)) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    const access_token = await this.jwtService.signAsync(payload);
    return {
      access_token
    };
  }
}
