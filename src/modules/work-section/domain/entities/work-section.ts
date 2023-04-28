import { Replace } from '@helpers/replace';
import { randomUUID } from 'crypto';

export interface WorkSectionProps {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
}

export class WorkSection {
  private props: WorkSectionProps;

  constructor(
    props: Replace<
      WorkSectionProps,
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

  public get description(): string {
    return this.props.description;
  }

  public set description(description: string) {
    this.props.description = description;
  }

  public get created_at(): Date {
    return this.props.created_at;
  }

  public get updated_at(): Date {
    return this.updated_at;
  }
}
