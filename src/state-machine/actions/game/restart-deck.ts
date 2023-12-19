import { ShitheadGame } from "../../../models/entities/shit-head-game";
import { getStandardDeck } from "../../../utilities/cards-utilities";

export const restartDeck = ({ context }: any, params: any): ShitheadGame => {
  return { ...context, deck: getStandardDeck() };
};
