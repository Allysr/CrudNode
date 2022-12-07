import { NextFunction, Request, Response } from "express";
import { database } from "../database/localStorage";


export const verifyIdMiddleware = (req:Request, res:Response, next:NextFunction) => {
 const id = parseInt(req.params["id"]);
 const anime = database.find((animes) => animes.id === id);
 if (!anime) {
   return res.json({ message: "Anime não encontrado!" });
 }
 next();
}