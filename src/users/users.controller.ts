import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { UsersService } from './services/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.schema';
import { UserJoinRoomDto } from './dto/user-join-room.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
  

  @Post('joinRoom')
  async joinRoom(@Body() request: UserJoinRoomDto) {
    await this.usersService.joinRoom(request);
  }

  @Post('leaveRoom')
  async leaveRoom(@Body() request: UserJoinRoomDto) {
    await this.usersService.leaveRoom(request);
  }

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    const userId = await this.usersService.create(createUserDto);
    return userId;
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
