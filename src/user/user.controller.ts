import { Body, Controller, Post, Patch, Delete, Param } from '@nestjs/common';
import { UserDeleteDto, UserRegisterDto, UserUpdatePasswordDto } from './user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

	constructor(private readonly userService: UserService) {}

	@Post('register')
	async registerUser(@Body() dto: UserRegisterDto) {
		return await this.userService.createUser(dto);
	}

	@Patch(':userId/update-password')
	async updatePassword(@Param('userId') userId: string, @Body() dto: UserUpdatePasswordDto) {

	}

	@Delete(':userId/delete')
	async deleteUser(@Param('userId') userId: string, @Body() dto: UserDeleteDto) {
		const { password } = dto;
		// TODO: password check
		const user = await this.userService.findUserById(userId);
		// hash input password and compare with user's from db password 

		return await this.userService.deleteUser(userId);
	}
}
