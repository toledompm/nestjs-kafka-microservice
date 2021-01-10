import { Injectable } from '@nestjs/common';
import { MessageDto } from '../common/message/message.dto';

@Injectable()
export class ConsumerService {
  getHello(message: MessageDto): void {
    console.log(`Hello ${message.value}!`);
  }
}
