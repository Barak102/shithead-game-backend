import mongoose from "mongoose";
import { ShitheadPlayerSchema } from "./shit-head-player.schema";

export const PositionSlotSchema =  new mongoose.Schema({
    id: String,
    position: Number,
    //player: ShitheadPlayer | null;
});
