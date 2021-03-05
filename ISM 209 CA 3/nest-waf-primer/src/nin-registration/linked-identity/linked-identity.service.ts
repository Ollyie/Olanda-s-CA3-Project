import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';

@Injectable()
export class LinkedIdentityService {
  constructor(
    @InjectRepository(LinkedIdentityService)
    private usersRepository: Repository <LinkedIdentityService>
  ) { }
  async create(createUserDto: CreateLinkedIdentityDto) {
    const newUser: LinkedIdentityService = this.usersRepository.create(createUserDto)
    return this.usersRepository.save(newUser);
    //return 'This action adds a new user';
  }
  async findAll() {
    //return `This action returns all users`;
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    //return `This action returns a #${id} user`;
    return await this.usersRepository.findOne(id);
  }
  async update(id: number, updateUserDto:
    UpdateLinkedIdentityDto) {
    //return `This action updates a #${id} BioData`;
    return await this.usersRepository.update(id,
      updateUserDto);
  }
  async remove(id: number) {
    //return `This action removes a #${id} BioData `;
    return await this.usersRepository.delete(id);
  }
}
