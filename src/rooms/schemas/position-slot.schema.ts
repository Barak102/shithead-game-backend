import { Prop, Schema } from '@nestjs/mongoose';
import { v4 as uuidv4 } from 'uuid';
import { Document } from 'mongoose';

import { Schema as MongooseSchema } from 'mongoose';

@Schema()
export class PositionSlot extends Document {
  @Prop({ default: uuidv4(), required: true })
  id: String;

  @Prop({ required: true })
  position: number;

  @Prop({ required: false, type: MongooseSchema.Types.ObjectId, ref: 'User' })
  player: MongooseSchema.Types.ObjectId; // Reference to ShitheadGame model by ObjectId
}
