import { Request, Response } from 'express';

class GameController {
    pickAll = (req: Request, res: Response) => {

    }
    breakIn = (req: Request, res: Response) => {

    }
    putCards = (req: Request, res: Response) => {

    }
    deal = (req: Request, res: Response) => {

    }
    pickCard = (req: Request, res: Response) => {

    }



    createUser = (req: Request, res: Response) => {
        const newUser = req.body;
        console.log("This is the new user object:", req.body);
        res.send({ id: 1, user: newUser.user })
    }

    getGameUsers = (req: Request, res: Response) => {
        res.send([{ id: 1, user: "Aviram" }, { id: 2, user: "Barak" }]);
    }
    public gameSample = (req: Request, res: Response) => {
        res.send({ id: 1, username: "Aviram" });
    };
}
export default GameController;