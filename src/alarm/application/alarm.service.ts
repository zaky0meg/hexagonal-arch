import { Injectable } from '@nestjs/common';
import { CreateAlarmCommand } from './commands/create-alarm.command';

@Injectable()
export class AlarmService {

    create(data : CreateAlarmCommand){}

    findAll(){

    }
}
