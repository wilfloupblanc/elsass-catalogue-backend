import { Repository } from "@lyra-js/core";
import { FoodItems } from "../entity/FoodItems.js";
export class FoodItemsRepository extends Repository {
    constructor() {
        super(FoodItems);
    }
}
