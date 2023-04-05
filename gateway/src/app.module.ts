import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
@Module({
  imports: [ClientsModule.register([
    {
      name: 'DB_SERVICE', transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 9002
      }
    }
  ])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
