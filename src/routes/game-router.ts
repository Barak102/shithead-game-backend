import { Request, Response, Router } from 'express';
import GameController from '../controllers/GameController';
import { authMiddleware } from '../middlewares/Auth-middleware';

const gameRouter = Router();
const controller = new GameController();
// gameRouter.get('/', (req: Request, res: Response) => {
//   res.send('Hello, this is your API route!');
// });

// users:
// get user
// edit user
// craete user
// delete user

// room:
// crud...


//gameRouter.use(authMiddleware)

gameRouter.get('/pickCard',controller.getGameUsers);
gameRouter.post('/',controller.createUser);

// gameRouter.post("/")
export default gameRouter;