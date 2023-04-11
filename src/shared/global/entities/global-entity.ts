import { randomUUID } from 'crypto';

export interface IGlobalEntity {
  id: string;
  created_at: Date;
  updated_at: Date;
}
export class GlobalEntity implements IGlobalEntity {
  private props: IGlobalEntity;
  constructor(props: IGlobalEntity) {
    this.props = {
      id: props.id ?? randomUUID(),
      created_at: props.created_at ?? new Date(),
      updated_at: props.updated_at ?? new Date(),
    };
  }

  public get id(): string {
    return this.props.id;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }

  public get updated_at(): Date {
    return this.props.updated_at;
  }
}
