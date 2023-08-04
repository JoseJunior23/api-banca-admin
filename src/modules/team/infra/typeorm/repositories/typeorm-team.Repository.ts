import { CreateTeamProps } from '@modules/team/domain/models/create-team.model.ts';
import { TeamRepository } from '@modules/team/domain/repositories/team.repository';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Team } from '../entities/team.entity';

@Injectable()
export class TypeormTeamRepository implements TeamRepository {
  constructor(
    @InjectRepository(Team)
    private readonly ormRepository: Repository<Team>,
  ) {}

  public async create({ name, description }: CreateTeamProps): Promise<Team> {
    const team = this.ormRepository.create({ name, description });
    await this.ormRepository.save(team);
    return team;
  }

  public async save(team: Team): Promise<Team> {
    await this.ormRepository.save(team);
    return team;
  }

  public async remove(team: Team): Promise<void> {
    await this.ormRepository.remove(team);
  }

  public async findById(id: string): Promise<Team | null> {
    const team = this.ormRepository.findOne({
      where: { id },
      // relations: ['employee', 'plan_detail'],
    });
    return team;
  }

  public async findAll(): Promise<Team[]> {
    const teams = this.ormRepository.find();
    return teams;
  }

  public async findByName(name: string): Promise<Team | null> {
    const team = this.ormRepository.findOneBy({ name });
    return team;
  }
}
