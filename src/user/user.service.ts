import { Injectable } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { UserModel } from './user.model';
import { ModelType, DocumentType } from '@typegoose/typegoose/lib/types';
import { UserRegisterDto } from './user.dto';
import { Types } from 'mongoose';

@Injectable()
export class UserService {
	constructor(@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>) {}

	async createUser(dto: UserRegisterDto): Promise<DocumentType<UserModel>> {
		return this.userModel.create(dto);
	}

	async deleteUser(id: string) {
		return this.userModel.deleteOne({ _id: Types.ObjectId(id) }).exec();
	}
}
