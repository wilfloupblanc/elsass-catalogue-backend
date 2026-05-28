import { Repository } from "@lyra-js/core"

import { ArcadeItems } from "@entity/ArcadeItems"

export class ArcadeItemsRepository extends Repository<ArcadeItems> {
  constructor() {
    super(ArcadeItems)
  }
}
