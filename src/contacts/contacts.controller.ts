import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ContactsService } from './contacts.service';
import { Prisma } from '@prisma/client';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('contacts')
@UseGuards(AuthGuard)
export class ContactsController {
  constructor(private readonly contactsService: ContactsService) {}

  @Post()
  create(@Body() createContactDto: Prisma.ContactCreateInput) {
    return this.contactsService.create(createContactDto);
  }

  @Get()
  findAll() {
    return this.contactsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactDto: Prisma.ContactUpdateInput) {
    return this.contactsService.update(+id, updateContactDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactsService.remove(+id);
  }
}
