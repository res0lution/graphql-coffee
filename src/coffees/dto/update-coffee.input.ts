import { IsOptional, MinLength } from 'class-validator';
import * as GraphQLTypes from 'src/graphql-types';

export class UpdateCoffeeInput extends GraphQLTypes.UpdateCoffeeInput {
  @IsOptional()
  @MinLength(3)
  name: string;
}
