import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { PositionSlot } from './position-slot.schema';
import { Types } from 'mongoose';
import { Document } from 'mongoose';

@Schema()
export class Room extends Document  {
  @Prop({ default: uuidv4(), required: true })
  id: string;

  @Prop({required: true})
  name: string;

  @Prop({ type: [PositionSlot], required: true, default: [] })
  slots: PositionSlot[];

  @Prop({ type: [{ type: Types.ObjectId, ref: 'User' }], default: [] })
  spectators: [];

  // @Prop({ required: false })
  // game: any;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Game', required: false })
  // game: Game; // Reference to the User schema as a foreign key

  //EXAMPLE:
  // @Prop({ type: mongoose.Schema.Types.Mixed }) // Property that can be any type of object
  // additionalData: any;

  @Prop({ required: false })
  password: string;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
