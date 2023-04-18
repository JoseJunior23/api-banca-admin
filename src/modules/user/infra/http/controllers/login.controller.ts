import { LoginUserService } from '@modules/user/domain/services/create-user-login.service';
import { Body, Controller, Post } from '@nestjs/common';

import { LoginDto } from '../dtos/login-dto';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('login')
export class LoginController {
  constructor(private readonly loginUser: LoginUserService) {}

  @Post()
  async create(@Body() { email, password }: LoginDto) {
    const data = await this.loginUser.execute({
      email,
      password,
    });

    return { user: UserViewModel.toLOGIN(data) };
  }
}
