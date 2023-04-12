import {
  GlobalEntity,
  IGlobalEntity,
} from '@shared/global/entities/global-entity';

export interface IUser {
  name: string;
  email: string;
  password: string;
}

export class User extends GlobalEntity {
  private userProps: IUser;

  constructor(props: IGlobalEntity, userProps: IUser) {
    super(props);
    this.userProps = userProps;
  }

  public get name(): string {
    return this.userProps.name;
  }

  public set name(name: string) {
    this.userProps.name = name;
  }

  public get email(): string {
    return this.userProps.email;
  }

  public set email(email: string) {
    this.userProps.email = email;
  }

  public get password(): string {
    return this.userProps.password;
  }

  public set password(password: string) {
    this.userProps.password = password;
  }
}
