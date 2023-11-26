import { Router } from "express";
import { getEstado, getEstados } from "../Controllers/estadoController.js";

const router = Router();

    router.get('/estados', getEstados)
    router.get("/estados/:idEstado", getEstado)

export default router