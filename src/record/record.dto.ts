export class CreateRecordDto {
	userId: string;
	title: string;
	password: string;
}

export class UpdateRecordDto {
	recordId: string;
	newPassword: string;
}