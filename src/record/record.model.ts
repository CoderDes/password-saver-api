import { prop } from '@typegoose/typegoose';
import { TimeStamps, Base } from '@typegoose/typegoose/lib/defaultClasses';
import { Types } from 'mongoose';

export interface RecordModel extends Base {}

export class RecordModel extends TimeStamps {
	@prop()
	title: string;

	@prop()
	passwordHash: string;

	@prop()
	userId: Types.ObjectId;
}