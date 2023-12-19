import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { JoinRoomDto } from 'src/dto/join-room.dto';

@Controller('rooms')
export class RoomsController {
    @Get(":id")
    getRoomById(@Param("id") id: string) {

    }

    @Post("join")
    join(@Body() request: JoinRoomDto) {

    }

    @Post("leave")
    leave(@Body() request: JoinRoomDto) {

    }


    @Delete(":id")
    deleteRoomById(@Param("id") id: string) {

    }
}
