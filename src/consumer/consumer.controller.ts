import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ConsumerService } from './consumer.service';

@Controller()
export class ConsumerController {
  constructor(private readonly consumerService: ConsumerService) {}

  @MessagePattern('my-first-topic')
  getHello(@Payload() message) {
    return this.consumerService.getHello(message.value);
  }
}
