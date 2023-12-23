import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ShitheadPlayer } from './shared/entities/shit-head-player';
import { GameStateMachineProvider } from './providers/game-state-provider';
import { CardVisibilityTypeEnum } from './shared/enums/card-visibility-type.enum';
import { ShitheadCardBase } from './shared/models/shit-head-card-base';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule, {
    abortOnError: false,
  });
  app.setGlobalPrefix('api');
  await app.listen(3000);

  // const gameProvider = new GameStateMachineProvider();
  // const newGame = gameProvider.createNewGame();

  // newGame.subscribe((ev: any) => {
  //   console.log(`The state machine state is: ${JSON.stringify(ev.value)}`);
  // });

  // newGame.sendEvent({ type: 'READY' });
  // const players: ShitheadPlayer[] = [
  //   { id: '1', userProfile: null, cards: [] },
  //   { id: '2', userProfile: null, cards: [] },
  // ];
  // newGame.sendEvent({ type: 'PLAYER_CONNECT', connectedPlayer: players[0] });
  // newGame.sendEvent({ type: 'PLAYER_CONNECT', connectedPlayer: players[1] });
  // setTimeout(() => {
  //   const { context } = newGame.getSnapshot();

  //   context.players.forEach((player: ShitheadPlayer) => {
  //     const cards = player.cards.filter(
  //       (c: ShitheadCardBase) => c.visibility === CardVisibilityTypeEnum.Hand,
  //     );
  //     const selectedCards = cards.slice(0, 3);
  //     newGame.sendEvent({ type: 'SELECT_CARDS', player, selectedCards });
  //   });
  // }, 10000);
}
bootstrap();
