import { IMongooseRepository } from 'src/shared/services/mongoose.repository';
import { User } from '../user.schema';
import { MongooseDatabaseService as MongooseDatabaseService } from 'src/database/mongoose.database.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { UserJoinRoomDto } from '../dto/user-join-room.dto';

@Injectable()
export class UsersMongooseRepository extends MongooseDatabaseService<User> {


  async leaveRoom(request: UserJoinRoomDto) {
    console.log('LEAVING ROOM', request.roomId, request.userId);

    await this.userModel.findOneAndUpdate(
        { _id: request.userId },
        { $set: { roomId: null } },
        { new: false } // Will NOT Return the updated document
      ).exec();
  }
  async joinRoom(request: UserJoinRoomDto) {
    console.log('THE ROOM ID', request.roomId, request.userId);
    // Update the document first

    await this.userModel.findOneAndUpdate(
        { _id: request.userId },
        { $set: { roomId: request.roomId } },
        { new: false } // Will NOT Return the updated document
      ).exec();
  }
  constructor(@InjectModel(User.name) private readonly userModel: Model<User>) {
    super(userModel);
  }

  async create(newObject: User): Promise<string> {
    newObject.loses = 0;
    const createdUser = new this.userModel(newObject);
    const savedUser = await createdUser.save();
    return savedUser._id;
  }
}
