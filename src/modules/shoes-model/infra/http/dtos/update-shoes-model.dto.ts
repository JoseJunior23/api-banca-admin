import { PartialType } from '@nestjs/mapped-types';

import { CreateShoesModelDto } from './create-shoes-model.dto';

export class UpdateShoesModelDto extends PartialType(CreateShoesModelDto) {}
