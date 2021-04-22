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
		// TODO: hash the password
		const { password } = dto;
		const hashedPassword = 'HASHED_PASSWORD_ON_CREATE';
		return this.recordModel.create({...dto, password: hashedPassword });
	}

	async updateById(dto: UpdateRecordDto) {
		const { recordId, newPassword } = dto;
		// TODO: hash the newPassword
		const newPasswordHash = "NEW_PASSWORD_HASH_PLACEHOLDER";
		return this.recordModel.findByIdAndUpdate(recordId, {passwordHash: newPasswordHash}, {new: true}).exec();
	}

	async deleteById(id: string) {
		return this.recordModel.deleteOne({ _id: Types.ObjectId(id) }).exec();
	}

	async getAllRecordsByUserId(id: string) {
		return this.recordModel.find({ userId: Types.ObjectId(id) }).exec();
	}
}
