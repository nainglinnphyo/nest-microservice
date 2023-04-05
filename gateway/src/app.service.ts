import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {

  constructor(@Inject('DB_SERVICE') private client: ClientProxy){}

  async getHello(body:any){
    return this.client.send('findAllUser', body);
  }

  async getHelloAsync() {
    const message = await this.client.send({cmd: 'greeting-async'}, 'Progressive Coder');
    return message;
  }
}
 