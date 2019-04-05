import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TareaModule} from './tarea/tarea.module'
import {DatabaseService} from './shared/db.service'
import {PersonaModule} from './persona/persona.module'

@Module({
  imports: [TareaModule, PersonaModule],
  controllers: [AppController],
  providers: [AppService, DatabaseService],
})
export class AppModule {}
