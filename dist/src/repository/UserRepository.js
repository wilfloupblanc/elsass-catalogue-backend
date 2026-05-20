import { Repository } from "@lyra-js/core";
import { User } from "../entity/User.js";
export class UserRepository extends Repository {
    constructor() {
        super(User);
    }
}
