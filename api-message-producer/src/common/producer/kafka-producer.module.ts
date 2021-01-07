import { Module } from '@nestjs/common';
import { KafkaProducerService } from './kafka-producer.service';

@Module({
  providers: [KafkaProducerService],
  exports: [KafkaProducerService],
})
export class KafkaProducerModule {}
