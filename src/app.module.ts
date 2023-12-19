import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';

@Module({
  imports: [
    UsersModule,
    RoomsModule
    // MongooseModule.forRoot('mongodb://localhost:27017/your-database-name', {
    // lazyConnection: true}),
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
