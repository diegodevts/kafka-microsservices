import { Module } from "@nestjs/common"
import { CreateUserService } from "./createUserUseCase"
import { CreateUserController } from "./createUser.controller"
import { KafkaProducer } from "../../infra/providers/kafka-server/kafka.producer"

@Module({
    controllers: [CreateUserController],
    providers: [CreateUserService, KafkaProducer]
})
export class CreateUserModule {}
