import { ShitheadGame } from '../../../../shared/entities/shit-head-game';

export const pickCard = ({ context }: any, params: any): ShitheadGame => {
  const { deck, players } = context;
  const playerCard = deck.pop();

  //set to the specific player
  players[0].deck.push(playerCard);
  return { ...context, players };
};
