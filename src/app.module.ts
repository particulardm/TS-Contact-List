import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './users/users.module';
import { BcryptModule } from './bcrypt/bcrypt.module';
import { JwtModule } from '@nestjs/jwt';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  imports: [ContactsModule,
            DatabaseModule,
            UsersModule,
            BcryptModule,
            JwtModule.register({
              global: true,
              secret: process.env.JWT_SECRET,
              signOptions: { expiresIn: '6000s' },
            })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
