import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto';
import { UserData } from './user.interface';

@Injectable()
export class UsersService {
  private users: UserData[] = [];

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

  findByEmail(email: string): UserData {
    const usersFilter = this.users.filter(user => user.email === email);
    return usersFilter.pop();
  }

  delete(id: number) {
    this.users = this.users.filter(user => user.id != id);
    return this.users;
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
}
