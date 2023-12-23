import { raise } from "xstate";
import { start_sub_states } from "./sub-states/start-sub-states";

export const pre_start_game = {
  initial: "prepareDeck",
  states: {
    prepareDeck: {
      entry: [
        {
          type: "logMessage",
          params: { message: "Preparing Deck" },
        },
        {
          type: "restartDeck",
          params: {},
        },
        {
          type: "logParameters",
          params: ["deck", "players"],
        },
        raise({ type: "NEXT" }, { delay: 2000 }),
      ],
      on: {
        NEXT: "shuffling",
      },
    },
    shuffling: {
      entry: [
        {
          type: "shuffleDeck",
          params: {},
        },
        {
          type: "logParameters",
          params: ["deck", "players"],
        },
        raise({ type: "NEXT" }, { delay: 2000 }),
      ],
      on: {
        NEXT: "deal",
      },
    },
    deal: {
      on: {
        SELECT_CARDS: "start",
      },
      entry: [
        {
          type: "logMessage",
          params: { message: "Dealing card to players" },
        },
        {
          type: "deal",
          params: {},
        },
        {
          type: "logParameters",
          params: ["deck", "players"],
        },
      ],
    },
    start: {
      ...start_sub_states,
    },
    endGame: {
      on: {
        RESTART: "#ShitheadGame.idle",
      },
    },
  },
};
