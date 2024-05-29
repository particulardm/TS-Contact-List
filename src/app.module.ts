import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { BcryptModule } from './bcrypt/bcrypt.module';

@Module({
  imports: [ContactsModule, DatabaseModule, UsersModule, BcryptModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
