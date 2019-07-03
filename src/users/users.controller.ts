import { Controller, Delete, Get, Param, Post, Body, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('error')
  async error() {
    throw new HttpException(
      {
        status: HttpStatus.NOT_IMPLEMENTED,
        error: 'This is a custom message',
      },
      501,
    );
  }

  @Get('findByEmail')
  findByEmail(@User('email') email: string) {
    return this.usersService.findByEmail(email);
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Delete(':id')
  delete(@Param('id', new ParseIntPipe()) id) {
    return this.usersService.delete(id);
  }
}
