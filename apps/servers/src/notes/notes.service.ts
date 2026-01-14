import { PrismaService } from './../prisma/prisma.service.js';
import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto.js';
import { UpdateNoteDto } from './dto/update-note.dto.js';

@Injectable()
export class NotesService {
  constructor(private readonly prisma: PrismaService) {}
  create(createNoteDto: CreateNoteDto, userId: string) {
    return this.prisma.note.create({
      data: {
        ...createNoteDto,
        user: {
          connect: { id: userId }, // within relations
        },
      },
    });
  }

  findAll(
    userId: string,
    sort: 'createdAt' | 'updatedAt' | 'title',
    order: 'asc' | 'desc',
  ) {
    const sortField = sort ?? 'updatedAt';
    const sortOrder = order ?? 'desc';

    return this.prisma.note.findMany({
      where: { userId },
      orderBy: { [sortField]: sortOrder },
    });
  }

  findOne(id: number) {
    return `This action returns a #${id} note`;
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return `This action updates a #${id} note`;
  }

  remove(id: number) {
    return `This action removes a #${id} note`;
  }
}
