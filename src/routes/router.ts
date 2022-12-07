import { Router} from "express";

import { getAllBookControler } from "../controllers/GetAllAnimeController";
import { CreateAnimeController } from "../controllers/CreateAnimeController";
import { updateAnimeController } from "../controllers/UpdateAnimeController";
import { deleteAnimeController } from "../controllers/DeleteAnimeController";
import { verifyIdMiddleware } from "../middlewares/VerifyIdMiddleware";
import { errorHandlerRequest } from "../errors/errorHandlerRequest";

const router = Router();

//Rota para criar um Anime
router.post("/", CreateAnimeController.handle );

// Rota para buscar todos os Animes
router.get("/", getAllBookControler);

// Rota para alterar um Anime
router.put("/:id", updateAnimeController.handler);

// Rota para deletar um anime Anime
router.delete("/:id", verifyIdMiddleware, deleteAnimeController.handler);

// Rota para quebrar a aplicação
router.get(
  "/throw",
  () => {
    throw new Error("Socorro explodiu.");
  },
  errorHandlerRequest
);



// const nu = null;
// const value = "Tem valor";
// console.log(nu ?? value)

export { router };