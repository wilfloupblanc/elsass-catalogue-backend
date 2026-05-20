import { Repository } from "@lyra-js/core";
import { Circuits } from "../entity/Circuits.js";
export class CircuitsRepository extends Repository {
    constructor() {
        super(Circuits);
    }
}
