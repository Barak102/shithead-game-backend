import { Request, Response } from 'express';

class GameController {
    public gameSample = (req: Request, res: Response) => {
        res.send('Hello, this is your API route! from the game controller');
    };
}
export default GameController;