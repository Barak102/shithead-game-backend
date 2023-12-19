import { Body, Controller, Post } from '@nestjs/common';
import { LoginUserDto } from './dto/login-user.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('auth')
export class AuthController {
  @Post('register')
  register(@Body() newUserDto: CreateUserDto) {}

  @Post('login')
  login(@Body() login: LoginUserDto) {}
}
