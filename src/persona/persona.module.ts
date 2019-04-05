import { Module } from '@nestjs/common';
import { PersonaController } from './persona.controller';
import { PersonaService } from './persona.service';
import {DatabaseService} from '../shared/db.service';

@Module({
    imports: [],
    controllers: [PersonaController],
    providers: [PersonaService, DatabaseService],
  })
  export class PersonaModule {}