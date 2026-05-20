import { Repository } from "@lyra-js/core"

import { Circuits } from "@entity/Circuits"

export class CircuitsRepository extends Repository<Circuits> {
  constructor() {
    super(Circuits)
  }
}
