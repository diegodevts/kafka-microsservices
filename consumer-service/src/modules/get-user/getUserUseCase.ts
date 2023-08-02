import { Injectable } from "@nestjs/common"
import { User } from "@prisma/client"
import { KafkaConsumer } from "src/infra/providers/kafka-server/kafka.consumer"

interface IGetUser {
    handle(): Promise<User>
}

@Injectable()
export class GetUserUseCase implements IGetUser {
    constructor(private consumer: KafkaConsumer) {}
    async handle(): Promise<User> {
        const consumer = this.consumer.execute("CREATE_USER")

        return consumer
    }
}
