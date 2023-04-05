import { Body, Controller, Logger, Post } from '@nestjs/common';
import { AppService } from './app.service';


@Controller()
export class AppController {
  private logger = new Logger()
  constructor(private readonly appService: AppService) {}

  @Post()
  getHello(@Body() body:any) {
    return this.appService.getHello(body);
  }
}
