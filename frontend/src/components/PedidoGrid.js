import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios"; 

function PedidoGrid ({ pedidos, setOnEditPedido, getPedidos, clientes, funcionarios, produtos, pagamentos }) {

    const handleEdit = (item) => {
        setOnEditPedido(item);
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/pedidos/" + id)
            .then(({ data }) => {
                getPedidos();
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));
        setOnEditPedido(null);
    }

    return(
        <div className="gridContainer">

            <h3>GRID</h3>

            <table>
                <thead>
                    <tr>
                        <th>Data</th>
                        <th>Valor Total</th>
                        <th>Descrição</th>
                        <th>Quantidade</th>
                        <th>Vendedor</th>
                        <th>Cliente</th>
                        <th>Produto Base</th>
                        <th>Metodo de Pagamento</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {pedidos.map((item, i) => (
                        <tr key={i}>
                            <td width="30%">{item.data}</td>
                            <td width="20%">{item.valor_total}</td>
                            <td width="30%">{item.descricao}</td>
                            <td width="20%">{item.quantidade}</td>
                            <td width="20%">{funcionarios.map(funcionario => {
                                if(item.id_funcionario == funcionario.id_funcionario){
                                    return funcionario.nome
                                }
                            })}</td>
                            <td width="20%">{clientes.map(cliente => {
                                if(item.id_cliente == cliente.id_cliente){
                                    return cliente.nome
                                }
                            })}</td>
                            <td width="20%">{produtos.map(produto => {
                                if(item.id_produto == produto.id_produto){
                                    return produto.nome
                                }
                            })}</td>
                            <td width="20%">{pagamentos.map(pagamento => {
                                if(item.id_metodo_pagamento == pagamento.id_metodo_pagamento){
                                    return pagamento.descricao
                                }
                            })}</td>
                            <td alignCenter width="5%">
                                <FaEdit onClick={() => handleEdit(item)} />
                            </td>
                            <td alignCenter width="5%">
                                <FaTrash onClick={() => handleDelete(item.id_pedido)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default PedidoGrid;
