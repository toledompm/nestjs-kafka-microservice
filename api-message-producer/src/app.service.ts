import { Injectable } from '@nestjs/common';
import { KafkaProducerService } from './common/producer/kafka-producer.service';

@Injectable()
export class AppService {
  constructor(private readonly KafkaProducerService: KafkaProducerService) {}
  publishMessage(message: string): Promise<void> {
    return this.KafkaProducerService.publish(message);
  }
}
