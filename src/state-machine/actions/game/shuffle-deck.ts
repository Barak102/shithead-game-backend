import { ShitheadGame } from "../../../models/entities/shit-head-game";

export const shuffleDeck = ({ context }: any, params: any): ShitheadGame => {
  const { deck } = context;
  for (let i = deck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return { ...context, deck };
};
