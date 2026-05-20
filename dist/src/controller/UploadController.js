var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Controller, Post, Route } from "@lyra-js/core";
import { isAuthenticated } from "@lyra-js/core";
import * as fs from "node:fs";
import * as path from "node:path";
import * as crypto from "node:crypto";
let UploadController = class UploadController extends Controller {
    async upload() {
        try {
            const { files } = await this.multipartParser.parse(this.req);
            const file = files === null || files === void 0 ? void 0 : files[0];
            if (!file) {
                return this.res.status(400).json({ message: "No file provided" });
            }
            const allowedTypes = ["image/jpeg", "image/png", "image/webp"];
            if (!allowedTypes.includes(file.mimetype)) {
                return this.res.status(400).json({ message: "Invalid file type" });
            }
            const ext = path.extname(file.name);
            const uniqueName = crypto.randomBytes(16).toString("hex") + ext;
            const uploadPath = path.join(process.cwd(), "uploads", uniqueName);
            fs.writeFileSync(uploadPath, file.data);
            const photo_url = `/uploads/${uniqueName}`;
            return this.res.status(201).json({ message: "File uploaded successfully", photo_url });
        }
        catch (error) {
            return this.next(error);
        }
    }
};
__decorate([
    Post({ path: "/", middlewares: [isAuthenticated] }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UploadController.prototype, "upload", null);
UploadController = __decorate([
    Route({ path: "/upload" })
], UploadController);
export { UploadController };
