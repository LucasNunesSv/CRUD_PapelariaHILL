import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios"; 

function PedidoGrid ({ pedidos, setOnEditPedido, getPedidos }) {

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
                            <td width="30%">{item.descricao_pedido}</td>
                            <td width="20%">{item.quantidade}</td>
                            <td width="20%">{item.funcionario_nome}</td>
                            <td width="20%">{item.cliente_nome}</td>
                            <td width="20%">{item.produto_nome}</td>
                            <td width="20%">{item.metodo_pagamento}</td>
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
