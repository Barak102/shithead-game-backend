import { GameState } from 'src/shithead-game/state-machine/game-state';

export class GameStateMachineProvider {
  createNewGame(): GameState {
    return new GameState();
  }
}
