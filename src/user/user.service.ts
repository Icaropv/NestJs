import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import { ReturnUserDto } from './dto/returnUser.dto';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService ) {}


    async user(UserWhereUniqueInput: Prisma.UserWhereUniqueInput): Promise<User | null> {
        return this.prisma.user.findUnique({where: UserWhereUniqueInput})

    }

    async createUser(createUserDto: CreateUserDto): Promise<ReturnUserDto> {
        const user = await this.prisma.user.create({data: createUserDto})
        return new ReturnUserDto(user)
    }

    async updateUser(
      id: number,
      updateUserDto: UpdateUserDto,
    ) {
        
        const updateUser = await this.prisma.user.update({where:{id}, data: updateUserDto})
        return {message: "Usuário atualizado com sucesso"}  }

    async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({where})

    }
}
