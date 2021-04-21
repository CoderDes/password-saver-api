import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';

export interface RecordModel extends Base {}

export class RecordModel extends TimeStamps {
	@prop()
	title: string;

	@prop()
	passwordHash: string;
}