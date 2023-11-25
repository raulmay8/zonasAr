import express from "express";
import { zonaController } from "../Controllers/zonaController.js";

const router = express.Router()

    router.get('/zon', zonaController.getAllUsers)

export default router