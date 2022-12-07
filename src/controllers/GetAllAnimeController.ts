import { Request, Response } from "express";

import { database } from "../database/localStorage";


export const getAllBookControler = (req: Request, res:Response) => {
    return res.json(database);
}