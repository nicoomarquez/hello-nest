import { Injectable } from '@nestjs/common';
import { UserInterface } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly users: UserInterface[] = [];

  createUser(user: UserInterface) {
    this.users.push(user);
  }

  getAllUsers(): UserInterface[] {
    return this.users;
  }
}
