import { Body, Controller, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from '@prisma/client';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) {}

    @Post('signUp')
    async signUpUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.userService.createUser(createUserDto)
    }

    @Patch('update/:id')
async updateUser(
    @Body() updateUserDto: UpdateUserDto,
    @Param('id', ParseIntPipe) id: number,
) {
    return this.userService.updateUser(id, updateUserDto)
}
}




//