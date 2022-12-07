import express from "express";
import { router }  from "./routes/router";
import "dotenv/config";


const port = process.env.PORT;
const app = express();


app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log(`Servidor iniciado na porta ${port}`)
});