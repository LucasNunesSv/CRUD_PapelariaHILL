import express  from "express";
import {getClientes, addCliente, updateCliente, deleteCliente ,getCliente} from "../controllers/clienteController.js";

const router = express.Router();

router.get("/clientes", getClientes);
router.get("/clientes/:id", getCliente);
router.post("/clientes", addCliente);
router.put("/clientes/:id", updateCliente);
router.delete("/clientes/:id", deleteCliente);

export default router;