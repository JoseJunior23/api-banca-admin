import { CreateUserService } from '@modules/user/domain/services/create-user-service';
import { Body, Controller, Post } from '@nestjs/common';

import { CreateUserDto } from '../dtos/create-user-dto';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('users')
export class UserController {
  constructor(private createUser: CreateUserService) {}

  @Post()
  async create(@Body() { email, name, password }: CreateUserDto) {
    const user = await this.createUser.execute({
      name,
      email,
      password,
    });

    return { user: UserViewModel.toHTTP(user) };
  }
}
