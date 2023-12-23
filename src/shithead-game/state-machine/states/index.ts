import { raise } from "xstate";
import { pre_start_game } from "./sub-states/pre-start-states";

export const getGameStateMachineObject = (gameConfig: any) => {
  debugger;
  const NEW_STATE_MACHINE_INSTANCE: any = {
    id: "ShitheadGame",
    initial: "idle",
    context: {
      players: [],
      middleCards: [],
      playerTurn: null,
      deck: [],
      burnedCards: [],
      config: gameConfig,
    },
    states: {
      idle: {
        on: {
          PLAYER_CONNECT: {
            guard: { type: "maximumPlayers" },
            actions: [
              "connect",
              raise({ type: "READY" }, { delay: 2000, id: "game_ready" }),
            ],
            target: "idle",
          },
          READY: {
            guard: { type: "minimumPlayers" },
            target: "play",
          },
          PLAYER_DISCONNET: "idle", //guard
        },
      },
      play: {
        ...pre_start_game,
        on: {
          PLAYER_DISCONNET: "idle", //guard
        },
      },
    },
  };
  return NEW_STATE_MACHINE_INSTANCE;
};
