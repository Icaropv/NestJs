import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { ReturnUserDto } from './dto/returnUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService ) {}


    async user(id: number): Promise< ReturnUserDto> {
        const getUser= await this.prisma.user.findUnique({where: {id}})

        if (!getUser) {
            throw new Error("Usuário não encontrado")
        }

        return new ReturnUserDto(getUser)

    }

    async findByEmail(email: string){
        const getByEmail = await this.prisma.user.findUnique({where: {email}})
        return getByEmail
    }

    async createUser(createUserDto: CreateUserDto): Promise<ReturnUserDto> {
        const hashPassword = await bcrypt.hash(createUserDto.password, 10)
        const createUser  = await this.prisma.user.create({data: {...createUserDto, password: hashPassword}})
        return new ReturnUserDto(createUser)
    }

    async updateUser(
      id: number,
      updateUserDto: UpdateUserDto,
    ) {
        
        await this.prisma.user.update({where:{id}, data: updateUserDto})
        return {message: "Usuário atualizado com sucesso"}  }

    async deleteUser(id: number) {
        await this.prisma.user.delete({where: {id}})
        return {message: "Usuário deletado com sucesso"}

    }

    async getAllUsers() {
        const user = await this.prisma.user.findMany()
        return user
    }
}
