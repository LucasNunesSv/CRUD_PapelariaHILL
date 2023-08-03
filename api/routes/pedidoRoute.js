import express  from "express";
import {getPedidos} from "../controllers/pedidoController.js";

const router = express.Router();

router.get("/pedidos", getPedidos)

export default router;