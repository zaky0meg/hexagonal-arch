import { Body, Controller, Get, Post } from '@nestjs/common';
import { AlarmService } from '../../application/alarm.service';
import { CreateAlarmCommand } from 'src/alarm/application/commands/create-alarm.command';
import { CreateAlarmDto } from './dto/create-alarm.dto';

@Controller('alarm')
export class AlarmController {
  constructor(private readonly alarmService: AlarmService) {}

  @Post()
  create(@Body() createAlarmDto: CreateAlarmDto) {
    return this.alarmService.create(
        new CreateAlarmCommand(
          createAlarmDto.name,
          createAlarmDto.severity,
        ),
      );
  }

  @Get()
  findAll(){
    return this.alarmService.findAll()
  }
}
