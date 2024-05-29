import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { BcryptModule } from 'src/bcrypt/bcrypt.module';
import { ContactsModule } from 'src/contacts/contacts.module';

@Module({
  imports: [DatabaseModule, BcryptModule, ContactsModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
