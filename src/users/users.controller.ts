import { Controller, Delete, Get, Param, Post, Body, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './user.decorator';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('user')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @ApiOperation({ title: 'Generate an error' })
  @ApiResponse({ status: 501, description: 'Not implemented exception with a custom message' })
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

  @ApiOperation({ title: 'Get user by email' })
  @ApiResponse({ status: 200, description: 'User found.' })
  @ApiResponse({ status: 403, description: 'Forbidden.' })
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
