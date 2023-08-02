import { Module } from "@nestjs/common"
import { GetUserUseCase } from "./getUserUseCase"
import { GetUserController } from "./getUser.controller"
import { KafkaConsumer } from "src/infra/providers/kafka-server/kafka.consumer"

@Module({
    controllers: [GetUserController],
    providers: [GetUserUseCase, KafkaConsumer]
})
export class GetUserModule {}
