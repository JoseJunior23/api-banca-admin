import { Replace } from '@helpers/replace';
import { randomUUID } from 'crypto';

export interface EmployeeProps {
  id: string;
  name: string;
  nickname?: string;
  phone: string;
  created_at: Date;
  updated_at: Date;
}

export class Employee {
  private props: EmployeeProps;

  constructor(
    props: Replace<
      EmployeeProps,
      { id?: string; created_at?: Date; updated_at?: Date }
    >,
  ) {
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

  public get nickname(): string {
    return this.props.nickname;
  }

  public set nickname(nickname: string) {
    this.props.nickname = nickname;
  }

  public get phone(): string {
    return this.props.phone;
  }

  public set phone(phone: string) {
    this.props.phone = phone;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }

  public get updated_at(): Date {
    return this.props.updated_at;
  }
}
