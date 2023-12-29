// import mongoose from 'mongoose';
// import { PositionSlotSchema } from './position-slot.schema';
// import { ShitheadGameSchema } from './shit-head-game.schema';

// export const RoomsSchema = new mongoose.Schema({
//     id: String,
//   slots: PositionSlotSchema,
//   game: ShitheadGameSchema
// });

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
import { PositionSlot } from './position-slot.schema';
@Schema()
export class Room {
  @Prop({ default: uuidv4(), required: true })
  id: string;

  @Prop({ required: true })
  slots: PositionSlot;

  @Prop({ required: false })
  gameId: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  nickName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, deault: 0 })
  loses: number;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
