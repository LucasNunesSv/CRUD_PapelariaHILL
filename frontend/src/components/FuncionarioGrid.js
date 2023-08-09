import React from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import { toast } from "react-toastify";
import axios from "axios"; 

function FuncionarioGrid ({ funcionarios, setOnEditFuncionario, getFuncionarios, cargos }) {

    const handleEdit = (item) => {
        setOnEditFuncionario(item);
    }

    const handleDelete = async (id) => {
        await axios
            .delete("http://localhost:8800/funcionarios/" + id)
            .then(({ data }) => {
                getFuncionarios();
                toast.success(data);
            })
            .catch(({ data }) => toast.error(data));
        setOnEditFuncionario(null);
    }

    return(
        <div className="gridContainer">

            <h3>GRID</h3>

            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Endereço</th>
                        <th>Telefone</th>
                        <th>Cargo</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {funcionarios.map((item, i) => (
                        <tr key={i}>
                            <td width="30%">{item.nome}</td>
                            <td width="30%">{item.endereco}</td>
                            <td width="20%">{item.telefone}</td>
                            <td width="20%">{item.cargo}</td>
                            <td alignCenter width="5%">
                                <FaEdit onClick={() => handleEdit(item)} />
                            </td>
                            <td alignCenter width="5%">
                                <FaTrash onClick={() => handleDelete(item.id_funcionario)} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}

export default FuncionarioGrid;

// onClick={() => handleEdit(item.id)}
// onClick={() => handleDelete(item.id)} 