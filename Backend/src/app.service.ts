import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  gethello(): string {
    return 'Hello World!';
  }

  getworld():string{
    return 'This is the world'
  }
}
