import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { UserModel } from './user.model';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: UserModel,
        schemaOptions: {
          collection: 'User',
        }
      },
    ]),
  ],
  controllers: [UserController]
})
export class UserModule {}
