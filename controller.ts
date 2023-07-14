import { Request, Response } from "express";

const logController = (req: Request, res: Response): void => {
    console.log(req.method);
    res.send('received');
};

const newLogController = (req: Request, res: Response): void => {
    console.log(req.method);
    res.send('received new');
};

const postController = (req: Request, res: Response): void => {
    console.log(req.method);
    res.send('received post');

    const saludo = req.body.saludo;
    console.log(saludo);
};

export {
    logController,
    newLogController,
    postController
};