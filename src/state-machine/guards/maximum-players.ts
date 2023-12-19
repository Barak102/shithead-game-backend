import { ShitheadPlayer } from "../../models/entities/shit-head-player";

export const maximumPlayers = ({ context }: any, params: any): boolean => {
  const { config } = context;
  const { players }: { players: ShitheadPlayer[] } = context;
  console.log("Maximum players to connect");
  return players.length < config.maximumPlayers;
};
