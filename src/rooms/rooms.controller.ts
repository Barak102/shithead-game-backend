import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { JoinRoomDto } from './dto/join-room.dto';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Controller('rooms')
export class RoomsController {

  
constructor(private readonly roomsService: RoomsService) {}


@Get()
async getAllRooms() {
  return await this.roomsService.getAll();
}

  @Get(':id')
  async getRoomById(@Param('id') id: string) {
    return await this.roomsService.getById(id);
  }

  @Post()
  async create(@Body() request: CreateRoomDto) {
    try {
      const id = await this.roomsService.create(request);
      return id;
    }
    catch(err) {
      console.log(err);
      throw err;
    }
  }

  @Put(":id")
  update(@Param("id") id: string, @Body() request: UpdateRoomDto) {
    this.roomsService.update(id, request);
  }

  @Delete(':id')
  deleteRoomById(@Param('id') id: string) {
    this.roomsService.remove(id);
  }

  // @Post('join')
  // async join(@Body() request: JoinRoomDto) {
  //   await this.roomsService.join(request);
  // }

  @Post('leave')
  leave(@Body() request: JoinRoomDto) {}
}
