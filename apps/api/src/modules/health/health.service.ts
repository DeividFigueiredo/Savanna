import { Injectable } from '@nestjs/common';
import { AppConfig } from '../../config/app.config';

@Injectable()
export class HealthService {
  getHealth() {
    return {
      name: AppConfig.name,  
      status: 'ok',
      version: AppConfig.version,
      timestamp: new Date().toISOString(),
    };
  }
}