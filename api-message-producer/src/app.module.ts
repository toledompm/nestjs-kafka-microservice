import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaProducerModule } from './common/producer/kafka-producer.module';

@Module({
  imports: [KafkaProducerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
