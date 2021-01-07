import { Injectable } from '@nestjs/common';

@Injectable()
export class ConsumerService {
  getHello(message: any): string {
    console.log(`Hello ${message}`);
    return 'Hello World!';
  }
}
