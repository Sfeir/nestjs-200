import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserData } from './user.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  private users: UserData[] = [];

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  create(user: CreateUserDto): UserData {
    let newId = this.getRandomInt(9999);
    const userAdd: UserData = {
      id: newId,
      username: user.username,
      email: user.email,
      password: user.password,
    };
    this.users.push(userAdd);
    return userAdd;
  }

  async findByEmail(email: string): Promise<UserData> {
    const user = await this.userRepository.findOne({ email: email });
    return this.buildUserDTO(user);
  }

  delete(id: number) {
    this.users = this.users.filter(user => user.id != id);
    return this.users;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private buildUserDTO(user: UserEntity) {
    const userDTO = {
      id: user.id,
      username: user.username,
      email: user.email,
      age: user.age,
    };

    return userDTO;
  }
}
