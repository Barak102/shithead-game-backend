import { ShitheadCardBase } from "../shit-head-card-base";
import { User } from "./user";

export type ShitheadPlayer = {
  id: string;
  userProfile: User | null;
  cards: ShitheadCardBase[];
}
