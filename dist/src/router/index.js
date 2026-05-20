import { createRouter } from "@lyra-js/core";
import { routes } from "./routes/index.js";
export const router = createRouter();
router.use(routes);
