import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';

import { AppModule } from './app.module';

import { broker, groupId } from '../kafka-config.json';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.KAFKA,
      options: {
        client: {
          brokers: [broker],
        },
        consumer: {
          groupId: groupId,
        },
      },
    },
  );

  app.listen(() => console.log('Kafka consumer service is listening!'));
}
bootstrap();
