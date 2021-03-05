import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLinkedIdentityDto } from './dto/create-linked-identity.dto';
import { UpdateLinkedIdentityDto } from './dto/update-linked-identity.dto';
import { LinkedIdentity } from './entities/linked-identity.entity';
import { BioDatum } from '../bio-data/entities/bio-datum.entity';

@Injectable()
export class LinkedIdentityService {
  BioDatumRepository: any;
  constructor(
    @InjectRepository(LinkedIdentity)
    private LinkedIdentityRepository: Repository<LinkedIdentity>
  ) { }
  async create(createLinkedIdentityDto: CreateLinkedIdentityDto) {
    //return 'This action adds a new student';
    const newLinkedIdentity = this.LinkedIdentityRepository.create(createLinkedIdentityDto);
    //ideally, below should be wrapped in a transaction so that it can roll back if there is error in any of the stages.
    if (createLinkedIdentityDto.biodatum) {
      const newBioDatum = this.BioDatumRepository.create(createLinkedIdentityDto.biodatum);
      const BioDatum: BioDatum = await this.BioDatumRepository.save(newBioDatum);
      newLinkedIdentity.BioDatum = BioDatum;
    }
    return this.LinkedIdentityRepository.save(newLinkedIdentity)
  }

  async findAll() {
    return `This action returns all linkedIdentity`;
    return await this.LinkedIdentityRepository.find();
  }

  async findOne(id: number) {
    return `This action returns a #${id} linkedIdentity`;
    return await this.LinkedIdentityRepository.findOne(id);
  }

  async update(id: number, updateLinkedIdentityDto: UpdateLinkedIdentityDto) {
    return `This action updates a #${id} linkedIdentity`;
    return await this.LinkedIdentityRepository.update(id, updateLinkedIdentityDto);
  }

  async remove(id: number) {
    return `This action removes a #${id} linkedIdentity`;
    return await this.LinkedIdentityRepository.delete(id);
  }

  /* Work on relationships */
  async setBioDatumById(linkedidentityId: number, biodatumId: number) {
    try {
      return await this.BioDatumRepository.createQueryBuilder()
        .relation(LinkedIdentity, "biodatum")
        .of(linkedidentityId)
        .set(biodatumId)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem setting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  async unsetBioDatumById(linkedidentityId: number) {
    try {
      return await this.LinkedIdentityRepository.createQueryBuilder()
        .relation(LinkedIdentity, "biodatum")
        .of(linkedidentityId)
        .set(null)
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        error: `There was a problem unsetting user for student: ${error.message}`,
      }, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

}

