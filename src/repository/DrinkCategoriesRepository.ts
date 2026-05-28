import { Repository } from "@lyra-js/core"

import { DrinkCategories } from "@entity/DrinkCategories"

export class DrinkCategoriesRepository extends Repository<DrinkCategories> {
  constructor() {
    super(DrinkCategories)
  }
}
