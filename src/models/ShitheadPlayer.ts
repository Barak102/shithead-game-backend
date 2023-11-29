import { ShitheadCardBase } from "./ShitheadCardBase";
import { User } from "./User";

export class ShitheadPlayer {
    public userProfile: User | null = null;
    public cards: ShitheadCardBase[] = [];
    //public status: PlayerStatus;
}