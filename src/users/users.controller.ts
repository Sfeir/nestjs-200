import {
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Body,
  HttpException,
  HttpStatus,
  ParseIntPipe,
  UseInterceptors,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { OverrideInterceptor } from '../shared/override.interceptor';

@Controller('users')
@UseInterceptors(OverrideInterceptor)
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

  @Get(':email')
  findByEmail(@Param('email') email: string) {
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
