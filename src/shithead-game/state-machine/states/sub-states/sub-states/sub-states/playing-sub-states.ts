export const gameplay_sub_state = {
  initial: "placing",
  states: {
    pending_between_turns: {
      on: {
        MOVE_TURN: "playing",
      },
    },
    playing: {
      on: {
        PUT_CARD: "placing",
        PICK_ALL: "pending_between_turns",
      },
    },
    placing: {
      on: {
        PENDING: "pending_between_turns",
        FINISH: "#ShitheadGame.play.endGame",
        PLAYER_FINISHED_GAME: "player_finish",
      },
    },
    player_finish: {
      on: {
        FINISH: "#ShitheadGame.play.endGame",
        MOVE_TO_NEXT_PLAYER: "pending_between_turns",
      },
    },
    player_break_in: {
      on: {
        PUT_BREAKIN_CARDS: "placing",
      },
    },
  },
};
