import { Repository } from "@lyra-js/core"

import { DrinkItems } from "@entity/DrinkItems"

export class DrinkItemsRepository extends Repository<DrinkItems> {
  constructor() {
    super(DrinkItems)
  }
}
