import { Repository } from "@lyra-js/core"

import { FoodItems } from "@entity/FoodItems"

export class FoodItemsRepository extends Repository<FoodItems> {
  constructor() {
    super(FoodItems)
  }
}
