import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { FlavorsByCoffeeLoader } from './data-loader/flavors-by-coffee.loader';
import { Coffee } from './entities/coffee.entity';

@Resolver('Coffee')
export class CoffeeFlavorsResolver {
  constructor(private readonly flavorsByCoffeeLoader: FlavorsByCoffeeLoader) {}

  @ResolveField('flavors')
  async getFlavorsOfCoffee(@Parent() coffee: Coffee) {
    // return this.flavorsByCoffeeLoader.load(coffee.id);
    return null;
  }
}
