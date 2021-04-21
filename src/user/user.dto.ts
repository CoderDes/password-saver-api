export class UserRegisterDto {
	email: string;
	password: string;
}

export class UserUpdatePasswordDto {
	userId: string;
	oldPassword: string;
	newPassword: string;
}

export class UserDeleteDto {
	userId: string;
	password: string;
}