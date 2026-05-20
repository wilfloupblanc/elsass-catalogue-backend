import { Repository } from "@lyra-js/core";
import { VehicleCategories } from "../entity/VehicleCategories.js";
export class VehicleCategoriesRepository extends Repository {
    constructor() {
        super(VehicleCategories);
    }
}
