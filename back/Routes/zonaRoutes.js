import { Router } from "express";
import { getZonas, getZona } from "../Controllers/zonaController.js";

const router = Router();

    router.get('/zonas', getZonas)
    router.get("/zonas/:idZona", getZona)

export default router