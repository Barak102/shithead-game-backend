import mongoose from "mongoose";
import { User } from "./user.schema";
import { ShitHeadCardSchema } from "./shit-head-card-base.schema";

export const ShitheadPlayerSchema = new mongoose.Schema({
  id: String,
  userProfile: User,
  cards: [ShitHeadCardSchema]
});
