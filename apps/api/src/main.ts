import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfig } from './config/app.config';
import * as proccess from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const nomeApp= AppConfig.name
  app.setGlobalPrefix('api');

  await app.listen(proccess.env.APP_PORT || 3000);

  console.log(`🚀 ${nomeApp} rodando em http://localhost:3000/api`);
}

bootstrap();