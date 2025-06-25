import { User } from '@prisma/client';


export class ReturnUserDto {
    name: string | null;
    email: string;




  constructor(
    user: User  

  ) {
    this.name= user.name
    this.email= user.email
   
  }
}
