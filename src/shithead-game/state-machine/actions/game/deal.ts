import { ShitheadGame } from 'src/shared/entities/shit-head-game';
import { ShitheadPlayer } from 'src/shared/entities/shit-head-player';
import { dealCardToPlayer } from 'src/shithead-game/utilities/cards-utilities';

export const deal = ({ context }: any, params: any): ShitheadGame => {
  const { players, deck } = context;
  let number_of_cards = 9;
  players.forEach((p: ShitheadPlayer) => {
    dealCardToPlayer(deck, p, number_of_cards);
  });
  return { ...context, players, deck };
};
