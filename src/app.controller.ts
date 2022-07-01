import { Controller, Get, OnModuleInit } from '@nestjs/common';
import { EventEmitter2 } from 'eventemitter2';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly eventEmitter: EventEmitter2,
  ) {}

  @Get()
  getHello(): string {
    this.eventEmitter.emit('event.one', 'hello from event one');
    this.eventEmitter.emit('event.two', 'hello form event two');
    return this.appService.getHello();
  }
}
