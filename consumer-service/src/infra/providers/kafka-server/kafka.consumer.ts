import { PrismaClient, User } from "@prisma/client"
import { Injectable } from "@nestjs/common"
import { Kafka } from "kafkajs"
import { PrismaClientService } from "src/database/PrismaClientService"

interface IKafkaConsumer {
    execute(topic: string): Promise<User>
}

@Injectable()
export class KafkaConsumer implements IKafkaConsumer {
    constructor(private prismaService: PrismaClientService) {}

    async execute(topic: string): Promise<User> {
        const kafka = new Kafka({
            clientId: "consumer",
            brokers: ["kafka1:19091", "localhost:9091"]
        })

        const consumer = kafka.consumer({ groupId: "test-group" })

        await consumer.connect()
        await consumer.subscribe({ topic, fromBeginning: true })

        await consumer.run({
            eachMessage: async ({ message }) => {
                const messageToString = message.value.toString()
                await this.prismaService.create(JSON.parse(messageToString))
            }
        })

        return this.prismaService.findFirst()
    }
}
