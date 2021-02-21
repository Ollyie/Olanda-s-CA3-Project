import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { create } from 'domain';
import { Repository } from 'typeorm';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';
import { BioDatum } from './entities/bio-datum.entity';

@Injectable()
export class BioDataService {
  constructor(
    @InjectRepository(BioDatum)
    private usersRepository: Repository<BioDatum>
  ) { }

  async create(createUserDto: CreateBioDatumDto) {
    const newUser: BioDatum = this.usersRepository.create(createUserDto)
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
    UpdateBioDatumDto) {
    //return `This action updates a #${id} BioData`;
    return await this.usersRepository.update(id,
      updateUserDto);
  }
  async remove(id: number) {
    //return `This action removes a #${id} BioData `;
    return await this.usersRepository.delete(id);
  }
}



