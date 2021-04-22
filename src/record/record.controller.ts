import { Body, Controller, Get, Param, Patch, Post, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateRecordDto, DeleteRecordParams, UpdateRecordDto } from './record.dto';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {

	constructor(private readonly recordService: RecordService) {}

	@Get('all/:userId')
	async getAllRecords(@Param('userId') userId: string) {
		return await this.recordService.getAllRecordsByUserId(userId);
	}

	@Post('new')
	async createRecord(@Body() dto: CreateRecordDto) {
		return await this.recordService.create(dto);
	}

	@Patch(':id/update')
	async updateRecord(@Body() dto: UpdateRecordDto) {
		return await this.recordService.updateById(dto);
	}

	@Delete(':id/delete')
	async deleteRecord(@Param() params: DeleteRecordParams) {
		const { id } = params;
		return this.recordService.deleteById(id); 
	}
}
