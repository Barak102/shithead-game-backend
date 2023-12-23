import { ShitheadGame } from 'src/shared/entities/shit-head-game';
import { getStandardDeck } from 'src/shithead-game/utilities/cards-utilities';

export const restartDeck = ({ context }: any, params: any): ShitheadGame => {
  return { ...context, deck: getStandardDeck() };
};
