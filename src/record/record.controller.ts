import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { CreateRecordDto, UpdateRecordDto } from './record.dto';

@Controller('record')
export class RecordController {

	@Get(':userId/all')
	async getAllRecords(@Param('userId') userId: string) {

	}

	@Post(':userId/new')
	async createRecord(@Param('userId') userId: string, @Body() dto: CreateRecordDto) {

	}

	@Patch(':userId/update')
	async updateRecord(@Param('userId') userId: string, @Body() dto: UpdateRecordDto) {

	}

	@Delete(':userId/delete')
	async deleteRecord(@Param('userId') userId: string) {

	}
}
