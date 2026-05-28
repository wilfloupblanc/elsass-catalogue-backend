import { Repository } from "@lyra-js/core"

import { FoodCategories } from "@entity/FoodCategories"

export class FoodCategoriesRepository extends Repository<FoodCategories> {
  constructor() {
    super(FoodCategories)
  }
}
