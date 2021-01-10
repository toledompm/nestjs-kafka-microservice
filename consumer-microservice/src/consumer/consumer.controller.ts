import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';
import { ParseMessagePipe } from '../common/message/parse-message.pipe';

import { kafkaTopic } from '../../kafka-config.json';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern(kafkaTopic)
  getHello(@Payload(new ParseMessagePipe()) message): void {
    return this.consumerService.getHello(message);
  }
}
