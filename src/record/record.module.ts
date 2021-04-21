import { Module } from '@nestjs/common';
import { RecordController } from './record.controller';
import { TypegooseModule } from 'nestjs-typegoose';
import { RecordModel } from './record.model';

@Module({
  imports: [TypegooseModule.forFeature([
    {
      typegooseClass: RecordModel,
      schemaOptions: {
        collection: 'Record',
      }
    },
  ])],
  controllers: [RecordController]
})
export class RecordModule {}
