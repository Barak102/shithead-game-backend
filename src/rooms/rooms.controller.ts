import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { JoinRoomDto } from './dto/join-room.dto';
import { RoomsService } from './rooms.service';

@Controller('rooms')
export class RoomsController {


constructor(private readonly roomsService: RoomsService) {}

  @Get(':id')
  getRoomById(@Param('id') id: string) {
    
    this.roomsService.findOne(id);
  }

  @Post('join')
  join(@Body() request: JoinRoomDto) {}

  @Post('leave')
  leave(@Body() request: JoinRoomDto) {}

  @Delete(':id')
  deleteRoomById(@Param('id') id: string) {}
}
