import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoomsModule } from './rooms/rooms.module';
import { SharedModule } from './shared/shared.module';
import { ShitheadGameModule } from './shithead-game/shithead-game.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    UsersModule,
    RoomsModule,
    SharedModule,
    ShitheadGameModule,
    DatabaseModule,
    // MongooseModule.forRoot('mongodb://localhost:27017/your-database-name', {
    // lazyConnection: true}),
    // UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
