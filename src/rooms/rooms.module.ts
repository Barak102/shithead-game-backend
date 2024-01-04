import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { DatabaseModule } from 'src/database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './schemas/room.schema';
import { RoomsMongooseRepository } from './rooms.mongoose.repository.service';

@Module({
    imports: [
        DatabaseModule,
        MongooseModule.forFeature([{ name: Room.name, schema: RoomSchema }])],
    controllers: [RoomsController],
    providers: [RoomsService,RoomsMongooseRepository],
})
export class RoomsModule {}
