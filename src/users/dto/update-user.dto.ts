import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export class UpdateUserDto {
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

  @IsNumber()
  @ApiModelPropertyOptional()
  readonly age: number;
}
