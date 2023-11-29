import express from 'express';
import gameRouter from './routes/game-router';
import { CardColorEnum } from './enums/CardColorEnum';
import { getStandardDeck } from './utilities/cards-utilities';
import { GameService } from './services/game-service';

const app = express();
const port = 3000;
app.use(express.json());


app.use('/api/game', gameRouter);



// app.get('/', (req: any, res: any) => {
//   res.send('Hello, this is your Node.js API with TypeScript!');
// });

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);


  const serv = new GameService();
  serv.createNewGame();
//const deck = getStandardDeck([]);
});