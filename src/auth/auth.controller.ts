import { Body, Controller, HttpCode, HttpStatus, Inject, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('signIn')
    @HttpCode(HttpStatus.OK)
    async signIn( @Body() body: AuthDto) {
        return this.authService.authUser(body)
    }

}
