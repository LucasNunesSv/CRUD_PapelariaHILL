import express  from "express";
import {getFuncionarios} from "../controllers/funcionarioController.js";

const router = express.Router();

router.get("/funcionarios", getFuncionarios)

export default router;