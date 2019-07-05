import { IsEmail, IsNotEmpty, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  readonly username: string;

  @IsEmail()
  @IsString()
  @ApiModelProperty()
  readonly email: string;

  @IsNotEmpty()
  @IsString()
  @ApiModelProperty()
  readonly password: string;
}
