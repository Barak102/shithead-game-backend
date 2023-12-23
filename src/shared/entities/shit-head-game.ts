import { ShitheadCardBase } from '../models/shit-head-card-base';
import { ShitheadPlayer } from './shit-head-player';

export type ShitheadGame = {
  id: string;
  deck: ShitheadCardBase[];
  middleCards: ShitheadCardBase[];
  burnedCards: ShitheadCardBase[];
  playerTurn: ShitheadPlayer | null;
  players: ShitheadPlayer[];
  config: any;
};
