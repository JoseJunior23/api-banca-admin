import { CreateUserService } from '@modules/user/domain/services/create-user.service';
import { DeleteUserService } from '@modules/user/domain/services/delete-user.service';
import { ListUserService } from '@modules/user/domain/services/list-user.service';
import { UpdateUserProfileService } from '@modules/user/domain/services/update-user-profile.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateUserDto } from '../dtos/create-user-dto';
import { UpdateUserProfileDto } from '../dtos/update-user-profile-dto copy';
import { UserViewModel } from '../view-models/user-view-model';

@Controller('users')
export class UserController {
  constructor(
    private readonly createUser: CreateUserService,
    private readonly listUser: ListUserService,
    private readonly deleteUser: DeleteUserService,
    private readonly updateUser: UpdateUserProfileService,
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

  @Delete(':id/delete')
  async remove(@Param('id') id: string) {
    await this.deleteUser.execute({
      userId: id,
    });
  }

  @Put(':id/update')
  async update(
    @Param('id') id: string,
    @Body() { name, email, password, old_password }: UpdateUserProfileDto,
  ) {
    await this.updateUser.execute({
      userId: id,
      name,
      email,
      password,
      old_password,
    });
  }
}
