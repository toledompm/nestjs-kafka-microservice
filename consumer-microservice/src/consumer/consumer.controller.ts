import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';

import { kafkaTopic } from '../../kafka-config.json';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern(kafkaTopic)
  getHello(@Payload() message): void {
    return this.consumerService.getHello(message);
  }
}
