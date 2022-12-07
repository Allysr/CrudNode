import { Request, Response} from 'express';

import { Anime } from "../interfaces/Anime";
import { database } from "../database/localStorage";


class UpdateAnimeController {
    async handler (req:Request, res:Response){
         const id = parseInt(req.params["id"]);
         const animeRequest = req.body as Anime;
         const anime = database.find((anime) => anime.id === id);
         if (!anime) {
           return res.json({ message: "Anime não encontrado!" });
         }
         anime.title = animeRequest.title ?? anime.title;
         //Se tiver um animeRequest.title altere o anterior
         //se não continue com o antigo.
         anime.autorName = animeRequest.autorName ?? anime.autorName;

         database[id] = anime;
         return res.json(database[id]);
    }
}

export const updateAnimeController = new UpdateAnimeController;