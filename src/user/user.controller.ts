import { Body, Controller, Post, Patch, Delete } from '@nestjs/common';
import { UserDeleteDto, UserRegisterDto, UserUpdatePasswordDto } from './user.dto';

@Controller('user')
export class UserController {

	@Post('register')
	async register(@Body() dto: UserRegisterDto) {

	}

	@Patch('update-password')
	async updatePassword(@Body() dto: UserUpdatePasswordDto) {

	}

	@Delete('delete-user')
	async deleteUser(@Body() dto: UserDeleteDto) {
		
	}
}
