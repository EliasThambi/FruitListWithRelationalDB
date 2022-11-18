import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NotesService } from './notes.service';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';
import { UsersService } from 'src/users/users.service';


@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService , 
    private readonly userService : UsersService,) {}

    // @Post()
    // async create(@Body() createNoteDto: CreateNoteDto) {
    //   const userData = await this.userService.findOne(createNoteDto.user);
    //   return this.notesService.create(createNoteDto, userData);
    // }
  @Post('add')
  async create(@Body() createNoteDto: CreateNoteDto) {
    const user = await this.userService.findOne(createNoteDto.userid)
    return  this.notesService.create(createNoteDto,user);
  }

  @Get()
  findAll() {
    return this.notesService.findAll();
  }

  // @Get(':id')
  // findAllNotes(@Param('id') id: string) {
  //   return this.notesService.findAllNotes(+id);
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.notesService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateNoteDto: UpdateNoteDto) {
    return this.notesService.update(+id, updateNoteDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.notesService.remove(+id);
  }
}
