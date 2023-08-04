import express  from "express";
import {getProdutos, getProduto, addProduto, updateProduto, deleteProduto} from "../controllers/produtoController.js";

const router = express.Router();

router.get("/produtos", getProdutos);
router.get("/produtos/:id", getProduto);
router.post("/produtos", addProduto);
router.put("/produtos/:id", updateProduto);
router.delete("/produtos/:id", deleteProduto);

export default router;