import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from '@prisma/client';
import { UpdateUserDto } from './dto/updateUser.dto';
import { CreateUserDto } from './dto/createUser.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { }

    @Post('')
    async signUpUser(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.userService.createUser(createUserDto)
    }

    @UseGuards(AuthGuard)
    @Patch(':id')
    async updateUser(
        @Body() updateUserDto: UpdateUserDto,
        @Param('id', ParseIntPipe) id: number,
    ) {
        return this.userService.updateUser(id, updateUserDto)
    }

    @UseGuards(AuthGuard)
    @Delete(':id')
    async deleteUser(
        @Param('id', ParseIntPipe) id : number 

        
    ){
        return this.userService.deleteUser(id)
    }

    @UseGuards(AuthGuard)
    @Get(':id') 
    async getUserById (
        @Param('id', ParseIntPipe) id: number 
    ){
        return this.userService.user(id)
    }

    @UseGuards(AuthGuard)
    @Get('') 
    async getUser (){
        return this.userService.getAllUsers()
    }




}






//