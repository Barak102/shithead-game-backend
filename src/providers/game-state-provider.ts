import { GameState } from "../state-machine/game-state";

export class GameStateMachineProvider {
  createNewGame(): GameState {
    return new GameState();
  }
}
