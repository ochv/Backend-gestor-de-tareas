import { Controller, Get, Post, Put, Delete, Body, Param, Query } from '@nestjs/common';
import { TareaService } from './tarea.service';

@Controller('tarea')
export class TareaController {

  constructor(private readonly tareaService: TareaService) {}

  @Get('all')
  getAllTask() {
    return this.tareaService.getAll();
  }

  @Get()
  getTask(@Query('id') id) {
    return this.tareaService.get(id);
  }

  @Post('create')
  createTask(@Body() task) {
    return this.tareaService.createTask(task);
  }

  @Delete('delete')
  deletetask(@Query('id') id){
    return this.tareaService.deleteTask(id);
  }
}
