import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const nomeApp= AppConfig.name
  app.setGlobalPrefix('api');

  await app.listen(3000);

  console.log(`🚀 ${nomeApp} rodando em http://localhost:3000/api`);
}

bootstrap();