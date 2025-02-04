import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: 'https://game.micromatrix.org',
    credentials: true, // 允许发送 Cookie
  });
  await app.listen(7000);
}
bootstrap();
