import { IsEmail, IsString, MinLength, MaxLength, IsMongoId } from 'class-validator';

export class UserRegisterDto {
	@IsEmail()
	email: string;

	@IsString()
	@MinLength(6)
	@MaxLength(255)
	password: string;
}

export class UserLoginDto extends UserRegisterDto {}

export class UserUpdatePasswordDto {
	@IsString()
	@MinLength(6)
	@MaxLength(255)
	oldPassword: string;

	@IsString()
	@MinLength(6)
	@MaxLength(255)
	newPassword: string;
}

export class UserDeleteDto {
	@IsString()
	@MinLength(6)
	@MaxLength(255)
	password: string;
}

export class UserDeleteParams {
	@IsMongoId()
	id: string;
}