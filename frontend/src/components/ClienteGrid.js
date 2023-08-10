import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios"; 
import "../styles/globalGrid.css"


function ClienteGrid ({ clientes, setOnEdit, getClientes }) {

    const handleEdit = (item) => {
        setOnEdit(item);
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/clientes/" + id)
            .then(({ data }) => {
                getClientes();
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));
        setOnEdit(null);
    }

    return(
        <div className="gridContainer">

            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereço</th>
                            <th>Telefone</th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map((item, i) => (
                            <tr key={i}>
                                <td width="30%">{item.nome}</td>
                                <td width="30%">{item.endereco}</td>
                                <td width="20%">{item.telefone}</td>
                                <td alignCenter width="5%">
                                    <FaEdit className="edit-icon" onClick={() => handleEdit(item)} />
                                </td>
                                <td alignCenter width="5%">
                                    <FaTrash className="delete-icon" onClick={() => handleDelete(item.id_cliente)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}

export default ClienteGrid;

// onClick={() => handleEdit(item.id)}
// onClick={() => handleDelete(item.id)} 