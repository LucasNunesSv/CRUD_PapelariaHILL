import express  from "express";
import {getCargos} from "../controllers/cargosFuncionarioController.js";

const router = express.Router();

router.get("/cargos", getCargos);

export default router;