import { Injectable } from '@nestjs/common';
import { OnEvent } from '@nestjs/event-emitter';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  @OnEvent('event.one')
  @OnEvent('event.two')
  onEvents(data: unknown) {
    console.log(data);
  }
}
