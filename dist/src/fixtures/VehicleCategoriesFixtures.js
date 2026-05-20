import { Fixture } from "@lyra-js/core";
import { VehicleCategories } from "../entity/VehicleCategories.js";
export class VehicleCategoriesFixtures extends Fixture {
    constructor() {
        super(...arguments);
        this.categories = [
            { name: "GT2" },
            { name: "GT3" },
            { name: "GT4" },
            { name: "Hypercar" },
            { name: "DTM" },
            { name: "Cup" },
            { name: "Historique" },
            { name: "Autres" },
            { name: "Formula 1" },
            { name: "Formula 2" },
            { name: "Formula 4" },
            { name: "Super Formula" },
            { name: "IndyCar" },
            { name: "LMP2" },
            { name: "NASCAR" },
            { name: "Drift" },
        ];
        this.load = async () => {
            await this.loadCategories();
        };
        this.loadCategories = async () => {
            for (const c of this.categories) {
                const category = new VehicleCategories();
                category.name = c.name;
                category.created_at = new Date();
                await this.vehicleCategoriesRepository.save(category);
            }
        };
    }
}
