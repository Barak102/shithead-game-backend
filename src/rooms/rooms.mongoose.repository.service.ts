import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Room } from './schemas/room.schema';
import { MongooseDatabaseService } from 'src/database/mongoose.database.service';
import { JoinRoomDto } from './dto/join-room.dto';

@Injectable()
export class RoomsMongooseRepository extends MongooseDatabaseService<Room> {
  constructor(@InjectModel(Room.name) private readonly roomModel: Model<Room>) {
    super(roomModel);
  }

//   async joinRoom(request: JoinRoomDto) {
//     console.log('THE ROOM ID', request.roomId, request.userId);
//     // Update the document first


//     return this.roomModel.findOneAndUpdate(
//         { _id: request.roomId },
//         { $push: { spectators: request.userId } },
//         { new: true } // Return the updated document
//       ).exec();
//   }
}
