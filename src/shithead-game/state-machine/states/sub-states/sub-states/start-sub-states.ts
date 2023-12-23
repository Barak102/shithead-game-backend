import { gameplay_sub_state } from './sub-states/playing-sub-states';

export const start_sub_states = {
  initial: 'decideStartingPlayer',
  states: {
    decideStartingPlayer: {
      on: {
        FIRST_BREAK_IN: 'playing',
      },
    },
    pending_between_turns: {
      on: {
        MOVE_TURN: 'playing',
      },
    },
    playing: {
      ...gameplay_sub_state,
      on: {
        BREAKIN_IN: '#ShitheadGame.play.start.playing.player_break_in',
      },
    },
  },
};
