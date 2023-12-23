import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
@Schema()
export class User {
  @Prop({ default: uuidv4(), required: true })
  id: string;

  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  nickName: string;

  @Prop({ required: true })
  email: string;

  @Prop({ required: true, deault: 0 })
  loses: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
