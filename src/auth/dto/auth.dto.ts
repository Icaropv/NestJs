import { IsEmail, IsString, MinLength } from "class-validator"

export class AuthDto {

    @IsEmail({},{ message: 'Invalid email' })
    email: string 

    @IsString({message: 'Invalid password'})
    @MinLength(5, {message: 'Password must be at least 6 characters'})
    password: string
    
}