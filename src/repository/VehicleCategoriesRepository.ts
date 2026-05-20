import { Repository } from "@lyra-js/core"

import { VehicleCategories } from "@entity/VehicleCategories"

export class VehicleCategoriesRepository extends Repository<VehicleCategories> {
  constructor() {
    super(VehicleCategories)
  }
}
