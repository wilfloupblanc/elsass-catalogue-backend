import { Repository } from "@lyra-js/core";
import { ResetPassword } from "../entity/ResetPassword.js";
export class ResetPasswordRepository extends Repository {
    constructor() {
        super(ResetPassword);
    }
}
