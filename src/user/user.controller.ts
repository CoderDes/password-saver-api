import { Body, Controller, Post, Patch, Delete, Param, BadRequestException } from '@nestjs/common';
import { UserDeleteDto, UserDeleteParams, UserLoginDto, UserRegisterDto, UserUpdatePasswordDto } from './user.dto';
import { UserService } from './user.service';
import { USER_EXIST_ERROR } from './user.constants';

@Controller('user')
export class UserController {

	constructor(private readonly userService: UserService) {}

	@Post('login')
	async loginUser(@Body() dto: UserLoginDto) {
		const { email } = await this.userService.validateUser(dto);
		return await this.userService.loginUser(email);
	}

	@Post('register')
	async registerUser(@Body() dto: UserRegisterDto) {
		const { email } = dto;
		const oldUser = await this.userService.findUserByEmail(email);

		if (oldUser) {
			throw new BadRequestException(USER_EXIST_ERROR);
		}

		return await this.userService.createUser(dto);
	}

	@Patch(':userId/update-password')
	async updatePassword(@Param('userId') userId: string, @Body() dto: UserUpdatePasswordDto) {}

	@Delete(':id/delete')
	async deleteUser(@Param() params: UserDeleteParams, @Body() dto: UserDeleteDto) {
		const { id } = params;
		const { password } = dto;
		// TODO: password check
		const user = await this.userService.findUserById(id);
		// hash input password and compare with user's from db password 

		return await this.userService.deleteUser(id);
	}
}
