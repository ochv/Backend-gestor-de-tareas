import { Module } from '@nestjs/common';
import { TareaController } from './tarea.controller';
import { TareaService } from './tarea.service';
import {DatabaseService} from '../shared/db.service'


@Module({
  imports: [],
  controllers: [TareaController],
  providers: [TareaService, DatabaseService],
})
export class TareaModule {}