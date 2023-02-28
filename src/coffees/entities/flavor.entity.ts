import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import * as GraphQLTypes from 'src/graphql-types';
import { Coffee } from './coffee.entity';

@Entity()
export class Flavor implements GraphQLTypes.Flavor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany((type) => Coffee, (coffee) => coffee.flavors)
  coffees: Coffee[];
}
