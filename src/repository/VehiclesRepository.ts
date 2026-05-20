import { Repository } from "@lyra-js/core"

import { Vehicles } from "@entity/Vehicles"

export class VehiclesRepository extends Repository<Vehicles> {
  constructor() {
    super(Vehicles)
  }
}
