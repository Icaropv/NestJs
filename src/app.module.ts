import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [AuthModule, UserModule, DatabaseModule],
  providers: [AuthService],
})
export class AppModule {}
