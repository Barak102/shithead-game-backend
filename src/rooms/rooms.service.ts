import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRoomDto } from './dto/create-room.dto';
import { Room } from './schemas/room.schema';
import { UpdateRoomDto } from './dto/update-room.dto';
import { PositionSlot } from './schemas/position-slot.schema';
import { v4 as uuidv4 } from 'uuid';
import { RoomsMongooseRepository } from './rooms.mongoose.repository.service';
import { JoinRoomDto } from './dto/join-room.dto';

@Injectable()
export class RoomsService {
  constructor(private db: RoomsMongooseRepository) {}

  private generatePositionSlots = (slots_number: number): PositionSlot[] => {
    const newSlots: PositionSlot[] = [];
    let ind = 0;
    while (ind < slots_number) {
      const newObj = {
        position: ind + 1,
        player: null,
      } as PositionSlot;
      ind++;
      newSlots.push(newObj);
    }
    return newSlots;
  };

  // async join(request: JoinRoomDto) {
  //   await this.db.joinRoom(request);
  // }


  async create(createRoomDto: CreateRoomDto): Promise<string> {
    console.log("CREATING ROOM");
    
    const { name, number_of_slots } = createRoomDto;
    const slots = this.generatePositionSlots(number_of_slots);
    console.log(JSON.stringify(slots));
    
    const newRoom = {
      name,
      slots
    };
    const result = await this.db.create(newRoom as any);
    return result;
  }

  async getAll() {
    return await this.db.getAll();
  }

  async getById(id: string): Promise<Room> {
    return await this.db.getById(id);
  }

  async update(id: string, updateRoomDto: UpdateRoomDto): Promise<void> {
    const updatedUser = await this.db.update(id, updateRoomDto as any);
  }

  async remove(id: string): Promise<void> {
    await this.db.delete(id);
  }
}
