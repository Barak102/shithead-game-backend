import { Request, Response, Router } from 'express';
import GameController from '../controllers/GameController';

const gameRouter = Router();
const controller = new GameController();
// gameRouter.get('/', (req: Request, res: Response) => {
//   res.send('Hello, this is your API route!');
// });


gameRouter.get('/',controller.gameSample);
export default gameRouter;