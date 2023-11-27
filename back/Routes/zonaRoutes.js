import { Router } from "express";
import { getZonas, getZona, getZonaEstado } from "../Controllers/zonaController.js";

const router = Router();

    router.get('/zonas', getZonas)
    router.get("/zonas/:idZona", getZona)
    router.get("/zonas/:idZona/estados", getZonaEstado)

export default router