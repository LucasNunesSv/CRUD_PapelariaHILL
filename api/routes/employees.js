import express from "express"
import {getEmployees} from "../controllers/employee.js"

const router = express.Router();

router.get("/funcionarios", getEmployees);

export default router;