import { Request, Response} from 'express';

import { database } from "../database/localStorage";

class DeleteAnimeController {
    async handler(req:Request, res:Response){
        const id = parseInt(req.params["id"]);
        
        const deleted = database.splice(id, 1);

        return res.json(deleted[0]);
    }
}

export const deleteAnimeController = new DeleteAnimeController;