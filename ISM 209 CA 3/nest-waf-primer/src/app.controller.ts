import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  getHome(): any {
    throw new Error('Method not implemented.');
  }
  constructor(private readonly appService: AppService) { }
  }

