import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { User } from '../user.schema';
import { UsersMongooseRepository } from './users-mongoose.repository';
import { UserJoinRoomDto } from '../dto/user-join-room.dto';

@Injectable()
export class UsersService {
  
  constructor(
    private readonly db: UsersMongooseRepository,
  ) {}

  async joinRoom(request: UserJoinRoomDto) {
    await this.db.joinRoom(request);
  }

  async leaveRoom(request: UserJoinRoomDto) {
    await this.db.leaveRoom(request);
  }

  async create(createUserDto: CreateUserDto) {
    const newUser: User = { ...createUserDto } as any;
    const userId = await this.db.create(newUser);
    return userId;
  }

  async findAll() {
    return await this.db.getAll();
  }

  async findOne(id: string) {
    return await this.db.getById(id);
  }

  async update(id: string, updateUserDto: UpdateUserDto): Promise<void> {
   await this.db.update(id, updateUserDto as User);
  }

  async remove(id: string): Promise<void> {
    await this.db.delete;
  }
}
