import express  from "express";
import {getFuncionarios, getFuncionario, addFuncionario, updateFuncionario, deleteFuncionario} from "../controllers/funcionarioController.js";

const router = express.Router();

router.get("/funcionarios", getFuncionarios);
router.get("/funcionarios/:id", getFuncionario);
router.post("/funcionarios", addFuncionario);
router.put("/funcionarios/:id", updateFuncionario);
router.delete("/funcionarios/:id", deleteFuncionario);


export default router;