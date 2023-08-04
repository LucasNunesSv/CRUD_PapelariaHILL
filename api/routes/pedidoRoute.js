import express  from "express";
import {getPedidos, getPedido, addPedido, updatePedido, deletePedido} from "../controllers/pedidoController.js";

const router = express.Router();

router.get("/pedidos", getPedidos);
router.get("/pedidos/:id", getPedido);
router.post("/pedidos", addPedido);
router.put("/pedidos/:id", updatePedido);
router.delete("/pedidos/:id", deletePedido);

export default router;