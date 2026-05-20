var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Get, HTTP_STATUS, Route } from "@lyra-js/core";
/**
 * ErrorController - Handles HTTP error responses
 *
 * This controller provides error handling routes that can be called by the error handler.
 * Each route can also be accessed directly for testing (e.g., GET /error/404?message=Custom+message)
 *
 * The errorHandler will redirect to these routes when errors occur.
 * You can customize these methods to render custom error pages or return custom JSON responses.
 */
let ErrorController = class ErrorController extends Controller {
    /**
     * Handle 404 Not Found errors
     * Access: GET /error/404
     */
    handle404() {
        return this.res.status(HTTP_STATUS.NOT_FOUND).json({
            error: "Not Found",
            message: "The requested resource was not found",
            statusCode: HTTP_STATUS.NOT_FOUND,
            path: this.req.url
        });
        // Example: Use SSR to render a custom 404 page
        // this.render('errors/404.ejs', {
        //     message: 'Page not found',
        //     url: this.req.url
        // });
    }
    /**
     * Handle 500 Internal Server Error
     * Access: GET /error/500
     */
    handle500() {
        return this.res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
            error: "Internal Server Error",
            message: "An unexpected error occurred",
            statusCode: HTTP_STATUS.INTERNAL_SERVER_ERROR
        });
        // Example: Use SSR to render a custom error page
        // this.render('errors/500.ejs', {
        //     message: 'Something went wrong'
        // });
    }
    /**
     * Handle 401 Unauthorized errors
     * Access: GET /error/401
     */
    handle401() {
        return this.res.status(HTTP_STATUS.UNAUTHORIZED).json({
            error: "Unauthorized",
            message: "Authentication is required",
            statusCode: HTTP_STATUS.UNAUTHORIZED
        });
        // Example: Use SSR to render a custom login page
        // this.render('errors/401.ejs', {
        //     message: 'Please log in to continue'
        // });
    }
    /**
     * Handle 403 Forbidden errors
     * Access: GET /error/403
     */
    handle403() {
        return this.res.status(HTTP_STATUS.FORBIDDEN).json({
            error: "Forbidden",
            message: "You don't have permission to access this resource",
            statusCode: HTTP_STATUS.FORBIDDEN
        });
        // Example: Use SSR to render a custom forbidden page
        // this.render('errors/403.ejs', {
        //     message: 'Access denied'
        // });
    }
    /**
     * Handle 400 Bad Request errors
     * Access: GET /error/400
     */
    handle400() {
        return this.res.status(HTTP_STATUS.BAD_REQUEST).json({
            error: "Bad Request",
            message: "The request was invalid",
            statusCode: HTTP_STATUS.BAD_REQUEST
        });
    }
    /**
     * Handle 409 Conflict errors
     * Access: GET /error/409
     */
    handle409() {
        return this.res.status(HTTP_STATUS.CONFLICT).json({
            error: "Conflict",
            message: "The request conflicts with current state",
            statusCode: HTTP_STATUS.CONFLICT
        });
    }
    /**
     * Handle 422 Unprocessable Entity errors
     * Access: GET /error/422
     */
    handle422() {
        return this.res.status(HTTP_STATUS.UNPROCESSABLE_ENTITY).json({
            error: "Unprocessable Entity",
            errors: "Validation failed",
            statusCode: HTTP_STATUS.UNPROCESSABLE_ENTITY
        });
    }
};
__decorate([
    Get("/404"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorController.prototype, "handle404", null);
__decorate([
    Get("/500"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorController.prototype, "handle500", null);
__decorate([
    Get("/401"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorController.prototype, "handle401", null);
__decorate([
    Get("/403"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorController.prototype, "handle403", null);
__decorate([
    Get("/400"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorController.prototype, "handle400", null);
__decorate([
    Get("/409"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorController.prototype, "handle409", null);
__decorate([
    Get("/422"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ErrorController.prototype, "handle422", null);
ErrorController = __decorate([
    Route({ path: "/error" })
], ErrorController);
export { ErrorController };
