import { ShitheadPlayer } from 'src/shared/entities/shit-head-player';

export const minimumPlayers = ({ context }: any, params: any): boolean => {
  const { config } = context;
  const { players }: { players: ShitheadPlayer[] } = context;
  console.log('Minimum players to play the game');
  return players.length >= config.minimumPlayers;
};
