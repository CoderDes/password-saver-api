import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { RecordModel } from './record.model';
import { CreateRecordDto, UpdateRecordDto } from './record.dto';
import { Types } from 'mongoose';

@Injectable()
export class RecordService {
	constructor(@InjectModel(RecordModel) private readonly recordModel: ModelType<RecordModel>) {}

	async create(dto: CreateRecordDto): Promise<DocumentType<RecordModel>> {
		return this.recordModel.create({...dto });
	}

	async updateById(dto: UpdateRecordDto) {
		const { recordId, newPassword } = dto;
		return this.recordModel.findByIdAndUpdate(recordId, {password: newPassword}, {new: true}).exec();
	}

	async deleteById(id: string) {
		return this.recordModel.deleteOne({ _id: Types.ObjectId(id) }).exec();
	}

	async getAllRecordsByUserId(id: string) {
		return this.recordModel.find({ userId: Types.ObjectId(id) }).exec();
	}
}
