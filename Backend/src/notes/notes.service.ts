import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { Note } from './entities/note.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class NotesService {
  constructor(
    @InjectRepository(Note)
    private noteRepo: Repository<Note>,
    private readonly userService : UsersService
  ) {}
  async create(createNoteDto: CreateNoteDto, ID: CreateUserDto) {
    // let note = this.noteRepo.create(createNoteDto)
    return await this.noteRepo.save({ desc: createNoteDto.desc, user: ID });
  }
  // create(createNoteDto: CreateNoteDto, userData: CreateUserDto) {
  //   // return 'This action adds a new note';
  //   return this.noteRepo.save({ desc: createNoteDto.desc, user: userData });
  // }
  findAll() {
    return this.noteRepo.find();
  }

  // findAllNotes(userid: number) {
  //   return this.noteRepo.findBy({ UsEr: userid });
  // }

  async findOne(id: number) {
    // const id1=this.userRepo.findOne({where:{usEr:1}})
    const user = await this.userService.findOne(id)
    return this.noteRepo.find({where:{ user: user}})
  }

  update(id: number, updateNoteDto: UpdateNoteDto) {
    return this.noteRepo.update(id,updateNoteDto)
  }

  remove(id: number) {
    return this.noteRepo.delete({id});
  }
}
