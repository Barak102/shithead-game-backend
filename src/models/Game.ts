import { ShitheadCardBase } from "./ShitheadCardBase";
import { ShitheadPlayer } from "./ShitheadPlayer";

export class ShitheadGame {
    public deck: ShitheadCardBase[] = [];
    public middleCards: ShitheadCardBase[] = [];
    public burnedCards: ShitheadCardBase[] = [];
    public players: ShitheadPlayer[] = [];
    public maxPlayers: number = 5;
    public minPlayers: number = 2;
    public status: any;
}