import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { AuthDto } from './dto/auth.dto';
import { CreateUserDto } from 'src/user/dto/createUser.dto';
import * as bcrypt from 'bcrypt'
import { ReturnAuthDto } from './dto/returnAuth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}


    async authUser (authDto: AuthDto): Promise<{access_token: string}> {
        const {email, password} = authDto
       
        const user = await this.userService.findByEmail(email)
        if (!user) throw new NotFoundException('Credenciais 1')
        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) throw new NotFoundException('Credenciais 2')

        const payload = {sub: user.id, username: user.name}

        return {access_token:await this.jwtService.signAsync(payload)}
       
    }


}
