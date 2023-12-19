import mongoose from "mongoose";
import { PositionSlotSchema } from "./position-slot.schema";
import { ShitheadGameSchema } from "./shit-head-game.schema";

export const UserSchema = new mongoose.Schema({
    id: String,
    slots: PositionSlotSchema,
    game: ShitheadGameSchema
});