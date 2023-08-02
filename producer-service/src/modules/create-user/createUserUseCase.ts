import { HttpException, HttpStatus, Injectable } from "@nestjs/common"
import { UserDTO } from "../../dtos/user.dto"
import { KafkaProducer } from "../../infra/providers/kafka-server/kafka.producer"

interface ICreateUser {
    handle(user: UserDTO): Promise<{ message: string; code: number }>
}

@Injectable()
export class CreateUserService implements ICreateUser {
    constructor(private producer: KafkaProducer) {}

    async handle(user: UserDTO) {
        const userCreated = await this.producer.execute(user)

        if (userCreated) {
            return { message: "Sended to the queue", code: 201 }
        }

        throw new HttpException(
            "User was not sended to the queue",
            HttpStatus.BAD_REQUEST
        )
    }
}
