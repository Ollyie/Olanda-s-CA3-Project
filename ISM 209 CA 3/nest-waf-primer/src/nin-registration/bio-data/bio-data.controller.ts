import { Controller, Get, Post, Body, Put, Param, Delete, Render } from '@nestjs/common';
import { BioDataService } from './bio-data.service';
import { CreateBioDatumDto } from './dto/create-bio-datum.dto';
import { UpdateBioDatumDto } from './dto/update-bio-datum.dto';

@Controller('bio-data')
export class BioDataController {
  constructor(private readonly bioDataService: BioDataService) { }

  @Post()
  create(@Body() createBioDatumDto: CreateBioDatumDto) {
    return this.bioDataService.create(createBioDatumDto);
  }

  @Get('create')
  @Render('BioDatum/create-bio-data.html')
  createForm() {
  }

  @Get()
  findAll() {
    return this.bioDataService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bioDataService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateBioDatumDto: UpdateBioDatumDto) {
    return this.bioDataService.update(+id, updateBioDatumDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bioDataService.remove(+id);
  }
}
