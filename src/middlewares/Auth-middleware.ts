import { Request, Response } from 'express';

export const authMiddleware = (req: Request, res: Response, next: any) => {
    const token = req.headers.authorization;
    console.log("This is the token:",token);
    
    if (!token) {
        res.send({ errorCode: "Unauthenticated", message: "Please login" })
    } else {
        if (token !== "Barak") {
            res.send({ errorCode: "Unahthorized", message: "This user is not Authorized" })
        } else {
            next();
        }
    }
};