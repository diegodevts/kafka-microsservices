import { Body, Controller, HttpException, Post } from "@nestjs/common"
import { CreateUserService } from "./createUserUseCase"
import { UserDTO } from "../../dtos/user.dto"

@Controller("producer")
export class CreateUserController {
    constructor(private createUserService: CreateUserService) {}

    @Post()
    async handle(@Body() user: UserDTO) {
        try {
            const { message, code } = await this.createUserService.handle(user)

            return { message, code }
        } catch (error) {
            if (error instanceof HttpException) {
                return { message: error.message, code: error.getStatus() }
            }
        }
    }
}
