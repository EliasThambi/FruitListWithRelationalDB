import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    let user = this.userRepo.create(createUserDto);
    return await this.userRepo.save(user);
  }

  // async getNotesById(userid:number){
  //   return await this.userRepo.findOneBy(userid)
  // }

  findAll() {
    return this.userRepo.find();
  }

  findOne(userid: number) {
    return this.userRepo.findOne({
      where: { id: userid },
      relations: ['notes'],
    });
  }
  async findUser(createUserDto: CreateUserDto){
    const userPresent = await this.userRepo.findOne({where:{userName:createUserDto.userName,password:createUserDto.password}})
    if(userPresent){
      return userPresent.id
    }
    else{
      return false
    }
    

  }

  async findOneNote(userid: number) {
    const noteInUser = await this.userRepo.findOne({
      where: { id: userid },
      relations: ['notes'],
    });
    console.log(noteInUser);
    return noteInUser.notes
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepo.delete({ id });
  }
}
