import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { PersonaService } from './persona.service';

@Controller('persona')
export class PersonaController {

    constructor(private readonly personaService: PersonaService) { }

    @Get('all')
    getAllPerson() {
        return this.personaService.getAllPerson();
    }
}