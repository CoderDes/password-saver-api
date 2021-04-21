import { RecordModel } from '../record/record.model';

export class UserModel {
	email: string;
	passwordHash: string;
	records: RecordModel;
}