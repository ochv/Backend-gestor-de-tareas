import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TareaModule} from './tarea/tarea.module'
import {DatabaseService} from './shared/db.service'

@Module({
  imports: [TareaModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
