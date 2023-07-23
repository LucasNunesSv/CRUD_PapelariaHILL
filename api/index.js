import express from "express"
import cors from "cors"
import clientsRoutes from "./routes/clients.js"
import productsRoutes from "./routes/products.js"
import employeesRoutes from "./routes/employees.js"

const app = express();

app.use(express.json());
app.use(cors())

app.use("/", productsRoutes);
app.use("/", clientsRoutes);
app.use("/", employeesRoutes);

app.listen(8800);