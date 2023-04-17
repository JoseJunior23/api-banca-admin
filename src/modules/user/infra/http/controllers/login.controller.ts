import { LoginUserService } from '@modules/user/domain/services/create-user-login.service';
import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto } from '../dtos/login-dto';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('users/login')
export class LoginController {
  constructor(private readonly login: LoginUserService) {}

  @Post()
  async create(@Body() { email, password }: LoginDto) {
    const { user } = await this.login.execute({
      email,
      password,
    });

    return { user: UserViewModel.toHTTP(user) };
  }
}
