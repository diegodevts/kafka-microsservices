import { User } from "@prisma/client"
import { prismaClient } from "./prismaClient"

interface IPrismaClientService {
    findFirst(): Promise<User>
    create(user: User): Promise<User>
}
export class PrismaClientService implements IPrismaClientService {
    constructor() {}

    async findFirst(): Promise<User> {
        return await prismaClient.user.findFirst()
    }

    async create(user: User): Promise<User> {
        return await prismaClient.user.create({ data: user })
    }
}
