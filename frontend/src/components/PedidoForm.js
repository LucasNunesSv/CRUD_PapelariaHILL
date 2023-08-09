import React, { useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function PedidoForm({ onEditPedido, setOnEditPedido, getPedidos, clientes, funcionarios, produtos, pagamentos }) {

    const ref = useRef();

    useEffect(() => {
        if (onEditPedido) {
            const pedido = ref.current;

            pedido.data.value = onEditPedido.data;
            pedido.valor_total.value = onEditPedido.valor_total;
            pedido.descricao.value = onEditPedido.descricao;
            pedido.quantidade.value = onEditPedido.quantidade;
            pedido.id_funcionario.value = onEditPedido.id_funcionario;
            pedido.id_cliente.value = onEditPedido.id_cliente;
            pedido.id_produto.value = onEditPedido.id_produto;
            pedido.id_metodo_pagamento.value = onEditPedido.id_metodo_pagamento;

        }
    }, [onEditPedido]);

    const handleSubmit = async (e) => {

        e.preventDefault();

        const pedido = ref.current;

        if (
            !pedido.valor_total.value ||
            !pedido.id_funcionario.value ||
            !pedido.id_cliente.value ||
            !pedido.id_produto.value ||
            !pedido.id_metodo_pagamento.value

        ) {
            return toast.warn("Preencha todos os campos obrigatórios *")
        }

        if (onEditPedido) {
            await axios
                .put("http://localhost:8800/pedidos/" + onEditPedido.id_pedido, {
                    data: pedido.data.value,
                    valor_total: pedido.valor_total.value,
                    descricao: pedido.descricao.value,
                    quantidade: pedido.quantidade.value,
                    id_funcionario: pedido.id_funcionario.value,
                    id_cliente: pedido.id_cliente.value,
                    id_produto: pedido.id_produto.value,
                    id_metodo_pagamento: pedido.id_metodo_pagamento.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800/pedidos", {
                    data: pedido.data.value,
                    valor_total: pedido.valor_total.value,
                    descricao: pedido.descricao.value,
                    quantidade: pedido.quantidade.value,
                    id_funcionario: pedido.id_funcionario.value,
                    id_cliente: pedido.id_cliente.value,
                    id_produto: pedido.id_produto.value,
                    id_metodo_pagamento: pedido.id_metodo_pagamento.value,
                })
                .then(({ data }) => toast.success(data))
                .catch((error) => {
                    if (error.response && error.response.data) {
                        toast.error(error.response.data.message);
                    } else {
                        toast.error("Erro na requisição");
                    }
                });
        }

        pedido.data.value = ""
        pedido.valor_total.value = ""
        pedido.descricao.value = ""
        pedido.quantidade.value = ""
        pedido.id_funcionario.value = ""
        pedido.id_cliente.value = ""
        pedido.id_produto.value = ""
        pedido.id_metodo_pagamento.value = ""

        setOnEditPedido(null);
        getPedidos();

    }

    return (
        <div className="formContainer">

            <h3>FORM</h3>

            <form ref={ref} onSubmit={handleSubmit}>

                <div className="inputArea">
                    <label>Data da Venda</label>
                    <input type="date" name="data" />
                </div>

                <div className="inputArea">
                    <label>Valor Total<span>*</span></label>
                    <input name="valor_total" />
                </div>

                <div className="inputArea">
                    <label>Descrição</label>
                    <input name="descricao" />
                </div>

                <div className="inputArea">
                    <label>Quantidade</label>
                    <input name="quantidade" />
                </div>

                <div className="inputArea">
                    <label>Vendedor(a)<span>*</span></label>
                    <select name="id_funcionario">
                        {funcionarios.map(funcionario => (
                            <option value={funcionario.id_funcionario}>{funcionario.nome}</option>
                        ))}
                    </select>
                </div>

                <div className="inputArea">
                    <label>Cliente<span>*</span></label>
                    <select name="id_cliente">
                        {clientes.map(cliente => (
                            <option value={cliente.id_cliente}>{cliente.nome}</option>
                        ))}
                    </select>
                </div>

                <div className="inputArea">
                    <label>Produto Base<span>*</span></label>
                    <select name="id_produto">
                        {produtos.map(produto => (
                            <option value={produto.id_produto}>{produto.nome}</option>
                        ))}
                    </select>
                </div>

                <div className="inputArea">
                    <label>Método de Pagamento<span>*</span></label>
                    <select name="id_metodo_pagamento">
                        {pagamentos.map(pagamento => (
                            <option value={pagamento.id_metodo_pagamento}>{pagamento.descricao}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">SALVAR</button>

            </form>
        </div>
    );
};

export default PedidoForm;