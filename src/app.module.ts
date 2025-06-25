import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthService } from './auth/auth.service';
import { UserModule } from './user/user.module';


@Module({
  imports: [AuthModule, UserModule],
  providers: [AuthService],
})
export class AppModule {}
