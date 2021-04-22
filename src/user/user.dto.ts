export class UserRegisterDto {
	email: string;
	password: string;
}

export class UserUpdatePasswordDto {
	oldPassword: string;
	newPassword: string;
}

export class UserDeleteDto {
	password: string;
}