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
  const port = process.env.PORT || 7000; // 使用 Vercel 提供的端口，或者如果本地运行时使用 7000
  await app.listen(port);
}
bootstrap();
