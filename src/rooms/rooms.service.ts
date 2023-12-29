import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './schemas/room.schema';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  constructor(
    @InjectModel(Room.name) private readonly roomModel: Model<Room>,
  ) {}

  create(createRoomDto: CreateRoomDto) {
    const createdRoom = new this.roomModel(createRoomDto);
    return createdRoom.save();
  }

  findAll() {
    return this.roomModel.find().exec();
  }

  async findOne(id: string) {
    const user = await this.roomModel.findOne({ id });
    return user;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<Room> {
    const updatedUser = await this.roomModel.findOneAndUpdate(
      { id },
      updateRoomDto,
      { new: true },
    );
    return updatedUser;
  }

  async remove(id: string): Promise<void> {
    await this.roomModel.deleteOne({ id });
  }
}
