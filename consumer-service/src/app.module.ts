import { Module } from '@nestjs/common';
import { GetUserModule } from './modules/get-user/get-user.module';

@Module({
  imports: [GetUserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
