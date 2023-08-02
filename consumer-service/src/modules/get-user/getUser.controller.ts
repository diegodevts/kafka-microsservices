import { Controller, Get } from "@nestjs/common"
import { GetUserUseCase } from "./getUserUseCase"

@Controller("consumer")
export class GetUserController {
    constructor(private readonly getUserUseCase: GetUserUseCase) {}

    @Get()
    async handle() {
        const user = await this.getUserUseCase.handle()

        return user
    }
}
