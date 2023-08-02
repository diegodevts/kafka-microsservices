import { Kafka } from "kafkajs"
import { UserDTO } from "../../../dtos/user.dto"
import { Injectable } from "@nestjs/common"

interface IKafkaProducer {
    execute(user: UserDTO): Promise<boolean>
}
@Injectable()
export class KafkaProducer {
    constructor() {}

    async execute(user: UserDTO): Promise<boolean> {
        const kafka = new Kafka({
            clientId: "producer",
            brokers: ["kafka1:19091", "localhost:9091"]
        })

        const producer = kafka.producer()

        await producer.connect()
        await producer.send({
            topic: "CREATE_USER",
            messages: [{ value: JSON.stringify(user) }]
        })

        await producer.disconnect()

        return true
    }
}
