import { User } from '@prisma/client';


export class ReturnUpdateUserDto {
    name: string | null;
    email: string;
    password: string;




  constructor(
    user: User  

  ) {
    this.name= user.name
    this.email= user.email
    this.password= user.password
   
  }
}
