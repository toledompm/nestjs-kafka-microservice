import { Controller, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(':name')
  async publishName(@Param() name: string): Promise<void> {
    return await this.appService.publishMessage(name);
  }
}
