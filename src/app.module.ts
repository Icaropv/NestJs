import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';
import { UserService } from './user/user.service';
import { PrismaService } from './database/prisma.service';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  providers: [AuthService, UserService, PrismaService, JwtService],
})
export class AppModule {}
