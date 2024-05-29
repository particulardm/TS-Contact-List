import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ContactsService {
  async create(createContactDto: Prisma.ContactCreateInput) {
    const prisma = new PrismaClient();
    const contact = await prisma.contact.create({
      data: createContactDto
    });
    return contact;
  }

  async findAll() {
    const prisma = new PrismaClient();
    const contacts = await prisma.contact.findMany();
    return contacts;
  }

  async findOne(id: number) {
    const prisma = new PrismaClient();
    const contact = await prisma.contact.findUnique(
      {
        where: {
          id
        }
      }
    )
    return contact;
  }

  async update(id: number, updateContactDto: Prisma.ContactUpdateInput) {
    const prisma = new PrismaClient();
    const updatedContact = await prisma.contact.update({
      where: {
        id
      },
      data: updateContactDto
    })
    return updatedContact;
  }

  async remove(id: number) {
    const prisma = new PrismaClient();
    const deletedContact = prisma.contact.delete({
      where: {
        id
      }
    })
    return deletedContact;
  }
}
