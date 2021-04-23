import { Body, Controller, Get, Param, Patch, Post, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/user/auth-guards/jwt.guard';
import { CreateRecordDto, DeleteRecordParams, UpdateRecordDto } from './record.dto';
import { RecordService } from './record.service';

@Controller('record')
export class RecordController {

	constructor(private readonly recordService: RecordService) {}

	@UseGuards(JwtAuthGuard)
	@Get('all/:userId')
	async getAllRecords(@Param('userId') userId: string) {
		return await this.recordService.getAllRecordsByUserId(userId);
	}

	@UseGuards(JwtAuthGuard)
	@Post('new')
	async createRecord(@Body() dto: CreateRecordDto) {
		return await this.recordService.create(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Patch(':id/update')
	async updateRecord(@Body() dto: UpdateRecordDto) {
		return await this.recordService.updateById(dto);
	}

	@UseGuards(JwtAuthGuard)
	@Delete(':id/delete')
	async deleteRecord(@Param() params: DeleteRecordParams) {
		const { id } = params;

		const deleteResult = await this.recordService.deleteById(id);
		if (deleteResult.deletedCount === 1) {
			return { ...deleteResult, recordId: id };
		}
		
		return deleteResult;
	}
}
