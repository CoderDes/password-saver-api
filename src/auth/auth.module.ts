import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthModel } from './auth.model';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: AuthModel,
        schemaOptions: {
          collection: 'Auth',
        }
      }
    ]),
  ],
  controllers: [AuthController]
})
export class AuthModule {}
