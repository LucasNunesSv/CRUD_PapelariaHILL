import express from "express"
import {getProducts} from "../controllers/product.js"

const router = express.Router();

router.get("/produtos", getProducts);

export default router;