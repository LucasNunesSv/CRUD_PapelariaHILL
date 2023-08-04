import express from "express";
import cors from "cors";

import clienteRoute from "./routes/clienteRoute.js";
import funcionarioRoute from "./routes/funcionarioRoute.js"
import produtoRoute from "./routes/produtoRoute.js"
import pedidoRoute from "./routes/pedidoRoute.js"
import cargosFuncionario from "./routes/cargosFuncionarioRoutes.js"
import categoriaProduto from "./routes/categoriaProdutoRoutes.js"
import metodoPagamento from "./routes/metodoPagamentoRoutes.js"

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", clienteRoute);
app.use("/", funcionarioRoute);
app.use("/", produtoRoute);
app.use("/", pedidoRoute);
app.use("/", cargosFuncionario);
app.use("/", categoriaProduto);
app.use("/", metodoPagamento);

app.listen(8800);