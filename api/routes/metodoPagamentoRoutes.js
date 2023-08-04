import express  from "express";
import {getPagamentos} from "../controllers/metodoPagamentoController.js";

const router = express.Router();

router.get("/pagamentos", getPagamentos);

export default router;