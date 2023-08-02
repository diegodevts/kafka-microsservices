import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import { config } from "dotenv"

config()

async function bootstrap() {
    const PORT = process.env.PORT ?? 3031
    const app = await NestFactory.create(AppModule)
    await app.listen(PORT)
}
bootstrap()
