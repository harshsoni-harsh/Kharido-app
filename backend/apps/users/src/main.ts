import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    UsersModule,
    {
      transport: Transport.TCP,
      options: {
        host: process.env.USERS_HOST ?? 'localhost',
        port: parseInt(process.env.USERS_SERVICE_PORT || '3001'),
      },
    },
  );
  await app.listen();
}
bootstrap();
