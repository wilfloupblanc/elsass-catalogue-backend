var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get, Route } from "@lyra-js/core";
/**
 * Example controller using decorator-based routing
 * Decorators provide a modern, declarative way to define routes directly in your controller classes
 * Routes are automatically discovered and registered - no manual route file registration needed
 */
let ExampleController = class ExampleController extends Controller {
    /**
     * SSR endpoint using decorator-based routing
     * The @Get decorator automatically registers this method as a GET route at /example/ssr
     * Uses this.render() (instance method) for server-side rendering
     */
    async exampleSsrRouteMethod(req, res, next) {
        try {
            return await this.render("ExampleRender.tsx", {
                title: "Server-Side Rendering with Decorator-Based Routing",
                content: "This page is rendered using the modern decorator-based approach in LyraJS. The @Route and @Get decorators automatically register this endpoint without requiring manual route file configuration. The this.render() instance method handles server-side template rendering, generating complete HTML pages that are SEO-friendly and load faster for users. Decorators make your code cleaner, more maintainable, and self-documenting.",
                documentationUrl: "https://lyrajs.dev/"
            });
        }
        catch (error) {
            return next(error);
        }
    }
};
__decorate([
    Get({ path: "/ssr" }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Function]),
    __metadata("design:returntype", Promise)
], ExampleController.prototype, "exampleSsrRouteMethod", null);
ExampleController = __decorate([
    Route({ path: "/example" })
], ExampleController);
export { ExampleController };
