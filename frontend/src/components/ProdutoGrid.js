import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios"; 
import "../styles/globalGrid.css"


function ProdutoGrid ({ produtos, setOnEditProduto, getProdutos }) {

    const handleEdit = (item) => {
        setOnEditProduto(item);
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/produtos/" + id)
            .then(({ data }) => {
                getProdutos();
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));
        setOnEditProduto(null);
    }

    return(
        <div className="gridContainer">
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Preço Unitário</th>
                            <th>Marca</th>
                            <th>Estoque</th>
                            <th>Categoria</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {produtos.map((item, i) => (
                            <tr key={i}>
                                <td width="30%">{item.nome}</td>
                                <td width="20%">{item.preco_unitario}</td>
                                <td width="30%">{item.marca}</td>
                                <td width="20%">{item.estoque}</td>
                                <td width="20%">{item.categoria_produto}</td>
                                <td alignCenter width="5%">
                                    <FaEdit className="edit-icon" onClick={() => handleEdit(item)} />
                                </td>
                                <td alignCenter width="5%">
                                    <FaTrash className="delete-icon" onClick={() => handleDelete(item.id_produto)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ProdutoGrid;
