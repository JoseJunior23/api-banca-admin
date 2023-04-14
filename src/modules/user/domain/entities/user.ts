import { randomUUID } from 'crypto';

export interface UserProps {
  id?: string;
  name: string;
  email: string;
  password: string;
  created_at?: Date;
  updated_at?: Date;
}

export class User {
  private props: UserProps;

  constructor(props: UserProps) {
    this.props = {
      ...props,
      id: props.id ?? randomUUID(),
      created_at: props.created_at ?? new Date(),
      updated_at: props.updated_at ?? new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get name(): string {
    return this.props.name;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get email(): string {
    return this.props.email;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get password(): string {
    return this.props.password;
  }

  public set password(password: string) {
    this.props.password = password;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }

  public get updated_at(): Date {
    return this.props.updated_at;
  }
}
