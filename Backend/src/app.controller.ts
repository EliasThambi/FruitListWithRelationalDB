import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.gethello();
  }

  @Get('world')
  getWorld(): string {
    return this.appService.getworld();
  }
}
