import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from 'nestjs-typegoose';
import { genSalt, hash, compare } from 'bcryptjs';
import { UserModel } from './user.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { UserLoginDto, UserRegisterDto } from './user.dto';
import { Types } from 'mongoose';
import { USER_NOT_FOUND, WRONG_PASSWORD_ERROR } from './user.constants';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
	constructor(
		@InjectModel(UserModel) private readonly userModel: ModelType<UserModel>,
		private readonly jwtService: JwtService
	) {}

	async loginUser(email: string) {
		const payload = { email };
		return {
			access_token: await this.jwtService.signAsync(payload),
		}
	}
	
	async validateUser(dto: UserLoginDto): Promise<Pick<UserModel, 'email'>> {
		const { email, password } = dto;

		const user = await this.findUserByEmail(email);
		if (!user) {
			throw new UnauthorizedException(USER_NOT_FOUND);
		}

		const isCorrectPassword: boolean = await compare(password, user.password);
		if (!isCorrectPassword) {
			throw new UnauthorizedException(WRONG_PASSWORD_ERROR);
		}

		return { email: user.email };
	}
	
	async createUser(dto: UserRegisterDto) {
		const { email, password } = dto;
		const salt = await genSalt(10);
		const newUser = new this.userModel({
			email,
			password: await hash(password, salt),
		});
		return newUser.save();
	}

	async deleteUser(id: string) {
		return this.userModel.deleteOne({ _id: Types.ObjectId(id) }).exec();
	}

	async findUserByEmail(email: string) {
		return this.userModel.findOne({ email });
	}

	async findUserById(id: string) {
		return this.userModel.findById(id);
	}

	async getUserWithRecords(email: string) {
		return this.userModel.aggregate([
			{
				$match: {
					email: email,
				}
			}, 
			{
				$lookup: {
					from: 'Record',
					localField: '_id',
					foreignField: 'userId',
					as: 'records'

				}
			}
		])
		.exec();
	}
}
