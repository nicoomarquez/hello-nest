import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './interfaces/user.interface';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() createUserDto: CreateUserDto): string {
    this.usersService.createUser(createUserDto);
    return 'User created';
  }
  @Get()
  findAll(): UserInterface[] {
    return this.usersService.getAllUsers();
  }
}
