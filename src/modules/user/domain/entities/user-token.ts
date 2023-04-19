import { Replace } from '@helpers/replace';
import { randomUUID } from 'crypto';

export interface UserTokenProps {
  id: string;
  token: string;
  user_id: string;
  created_at: Date;
  updated_at: Date;
}

export class UserToken {
  private props: UserTokenProps;
  constructor(
    props: Replace<
      UserTokenProps,
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

  public get token(): string {
    return this.props.id;
  }
  public get user_id(): string {
    return this.props.id;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }

  public get updated_at(): Date {
    return this.props.updated_at;
  }
}
