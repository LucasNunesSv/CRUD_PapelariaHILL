import React, { useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import "../styles/globalForm.css"

function ClienteForm({ onEdit, setOnEdit, getClientes }) {

    const ref = useRef();

    useEffect(() => {
        if (onEdit) {
            const cliente = ref.current;

            cliente.nome.value = onEdit.nome;
            cliente.endereco.value = onEdit.endereco;
            cliente.telefone.value = onEdit.telefone;
        }
    }, [onEdit]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const cliente = ref.current;

        if (!cliente.nome.value ) {
            return toast.warn("Preencha todos os campos obrigatórios *")
        }

        if (onEdit) {
            await axios
                .put("http://localhost:8800/clientes/" + onEdit.id_cliente, {
                    nome: cliente.nome.value,
                    endereco: cliente.endereco.value,
                    telefone: cliente.telefone.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800/clientes", {
                    nome: cliente.nome.value,
                    endereco: cliente.endereco.value,
                    telefone: cliente.telefone.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        cliente.nome.value = "";
        cliente.endereco.value = "";
        cliente.telefone.value = "";

        setOnEdit(null);
        getClientes();

    }

    return (
        <div className="formContainer">

            <div class="titleSection">
                <h1>Clientes</h1>
            </div>

            <form ref={ref} onSubmit={handleSubmit}>

                <div className="inputArea">
                    <label>Nome<span>*</span></label>
                    <input name="nome"/>
                </div>

                <div className="inputArea">
                    <label>Endereço</label>
                    <input name="endereco"/>
                </div>

                <div className="inputArea">
                    <label>Telefone</label>
                    <input name="telefone" />
                </div>

                <button type="submit">SALVAR</button>

            </form>
        </div>
    );
};

export default ClienteForm;