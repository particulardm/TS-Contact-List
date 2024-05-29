import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { BcryptModule } from 'src/bcrypt/bcrypt.module';

@Module({
  imports: [DatabaseModule, BcryptModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
