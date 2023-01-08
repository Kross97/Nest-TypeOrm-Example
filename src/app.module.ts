import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: 'localhost',
    port: 3306,
    username: 'Nik',
    password: '97',
    database: 'myDb',
    entities: ['dist/**/*.entity.js'],
    migrations: ['dist/migrations/*.js']
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
