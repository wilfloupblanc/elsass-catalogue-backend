import { createRouter } from "@lyra-js/core";
import { exampleRoutes } from "./exampleRoutes.js";
export const routes = createRouter();
routes.use("/example", exampleRoutes);
