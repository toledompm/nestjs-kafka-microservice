import { Module } from '@nestjs/common';
import { ConsumerController } from './consumer.controller';
import { ConsumerService } from './consumer.service';

@Module({
  imports: [],
  controllers: [ConsumerController],
  providers: [ConsumerService],
})
export class ConsumerModule {}
