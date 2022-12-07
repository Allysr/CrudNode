import { Request, Response } from "express";

import { Anime } from "../interfaces/Anime";
import { database } from "../database/localStorage";


export class CreateAnimeController {
    static async handle(req:Request, res: Response){
        const anime = req.body as Anime;
        anime.id = database.length;
        database.push(anime);
        const animeCreated = database[database.length - 1];

        return res.json(animeCreated);
    }
}


