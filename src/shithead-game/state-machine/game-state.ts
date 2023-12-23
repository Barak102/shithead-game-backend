import { AnyActorLogic, assign, createActor, createMachine } from 'xstate';
import { IGameState } from '../interface/game-state';
import { deal } from './actions/game/deal';
import { restartDeck } from './actions/game/restart-deck';
import { shuffleDeck } from './actions/game/shuffle-deck';
import { logMessage } from './actions/general/log-message';
import { logParameters } from './actions/general/log-parameters';
import { connect } from './actions/player/connect';
import { putCard } from './actions/player/put-card';
import { STATE_CONFIG } from './config/state-config';
import { maximumPlayers } from './guards/maximum-players';
import { minimumPlayers } from './guards/minimum-players';
import { getGameStateMachineObject } from './states';
import { ShitheadGame } from 'src/shared/entities/shit-head-game';

export class GameState implements IGameState {
  private actor: any;
  private machine: AnyActorLogic;

  constructor(stateMachine?: any, actor?: any) {
    this.machine =
      stateMachine ||
      createMachine<ShitheadGame, any, any, any, any, any, any, any, any>(
        getGameStateMachineObject(STATE_CONFIG),
        {
          actions: {
            putCard: assign(putCard),
            restartDeck: assign(restartDeck),
            deal: assign(deal),
            shuffleDeck: assign(shuffleDeck),
            logParameters,
            logMessage,
            connect,
          },
          guards: {
            minimumPlayers,
            maximumPlayers,
          },
        },
      );
    this.actor = actor || createActor(this.machine);
  }

  subscribe(method: any): void {
    if (this.actor && method) {
      this.actor.subscribe(method);
      this.actor.start();
    }
  }

  sendEvent(eventType: any): void {
    console.log(`Sending the event: ${eventType.type}`);

    this.actor.send(eventType);
  }

  public getSnapshot(): any {
    return this.actor._snapshot;
  }
}
