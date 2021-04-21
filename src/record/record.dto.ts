export class CreateRecordDto {
	title: string;
	password: string;
}

export class UpdateRecordDto extends CreateRecordDto {}