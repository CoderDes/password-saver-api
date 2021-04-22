import {IsString, MinLength, MaxLength, IsMongoId } from 'class-validator';

export class CreateRecordDto {
	@IsMongoId()
	userId: string;

	@IsString()
	title: string;

	@IsString()
	@MinLength(6)
	@MaxLength(255)
	password: string;
}

export class UpdateRecordDto {
	@IsMongoId()
	recordId: string;

	@IsString()
	@MinLength(6)
	@MaxLength(255)
	newPassword: string;
}

export class DeleteRecordParams {
	@IsMongoId()
	id: string;
}