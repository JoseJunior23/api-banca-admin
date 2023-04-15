import { CreateUserService } from '@modules/user/domain/services/create-user-service';
import { ListUserService } from '@modules/user/domain/services/list-user-service';
import { Body, Controller, Get, Post } from '@nestjs/common';

import { CreateUserDto } from '../dtos/create-user-dto';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('users')
export class UserController {
  constructor(
    private createUser: CreateUserService,
    private listUser: ListUserService,
  ) {}

  @Post()
  async create(@Body() { email, name, password }: CreateUserDto) {
    const { user } = await this.createUser.execute({
      name,
      email,
      password,
    });

    return { user: UserViewModel.toHTTP(user) };
  }

  @Get()
  async list() {
    const users = await this.listUser.execute();

    return { users: users.map(UserViewModel.toHTTP) };
  }
}
