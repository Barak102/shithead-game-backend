import { Prop, Schema } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';

import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class PositionSlot {
  @Prop({ default: uuidv4(), required: true })
  id: String;

  @Prop({ required: true })
  position: number;

  @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' })
  player: MongooseSchema.Types.ObjectId; // Reference to ShitheadGame model by ObjectId

  //   @Prop({ required: true })
  //   player: ShitheadPlayerSchema;

  // todo: add this player be ref to his document => user -> _id
  //   @Prop({ type: [{ type: Schema.Types.ObjectId, ref: 'User' }] })
  //   players: Schema.Types.ObjectId[]; // Reference to Player model by ObjectId
}
