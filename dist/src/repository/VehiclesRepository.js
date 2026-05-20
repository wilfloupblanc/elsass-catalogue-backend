import { Repository } from "@lyra-js/core";
import { Vehicles } from "../entity/Vehicles.js";
export class VehiclesRepository extends Repository {
    constructor() {
        super(Vehicles);
    }
}
