import { Controller, Post, Route } from "@lyra-js/core"
import { isAuthenticated } from "@lyra-js/core"
import * as fs from "node:fs"
import * as path from "node:path"
import * as crypto from "node:crypto"

@Route({ path: "/upload" })
export class UploadController extends Controller {
  @Post({ path: "/", middlewares: [isAuthenticated] })
  async upload() {
    try {
      const { files } = await this.multipartParser.parse(this.req)
      const file = files?.[0]

      if (!file) {
        return this.res.status(400).json({ message: "No file provided" })
      }

      const allowedTypes = ["image/jpeg", "image/png", "image/webp"]
      if (!allowedTypes.includes(file.mimetype)) {
        return this.res.status(400).json({ message: "Invalid file type" })
      }

      const ext = path.extname(file.name)
      const uniqueName = crypto.randomBytes(16).toString("hex") + ext
      const uploadPath = path.join(process.cwd(), "uploads", uniqueName)

      fs.writeFileSync(uploadPath, file.data)

      const photo_url = `/uploads/${uniqueName}`
      return this.res.status(201).json({ message: "File uploaded successfully", photo_url })
    } catch (error) {
      return this.next(error)
    }
  }
}