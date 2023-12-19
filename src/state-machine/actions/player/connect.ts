import { ShitheadGame } from "../../../models/entities/shit-head-game";
import { ShitheadPlayer } from "../../../models/entities/shit-head-player";

export const connect = ({ context, event }: any): ShitheadGame => {
  const { players }: { players: ShitheadPlayer[] } = context;
  const { connectedPlayer } = event;
  players.push(connectedPlayer);
  return {
    ...context,
    players,
  };
};
