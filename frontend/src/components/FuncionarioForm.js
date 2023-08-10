import React, { useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "../styles/globalForm.css"

function FuncionarioForm({ onEditFuncionario, setOnEditFuncionario, getFuncionarios, cargos }) {

    const ref = useRef();

    useEffect(() => {
        if (onEditFuncionario) {
            const funcionario = ref.current;

            funcionario.nome.value = onEditFuncionario.nome;
            funcionario.endereco.value = onEditFuncionario.endereco;
            funcionario.telefone.value = onEditFuncionario.telefone;
            funcionario.id_cargo.value = onEditFuncionario.id_cargo;

        }
    }, [onEditFuncionario]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const funcionario = ref.current;

        if (
            !funcionario.nome.value ||
            !funcionario.id_cargo.value
        ) {
            return toast.warn("Preencha todos os campos obrigatórios *")
        }

        if (onEditFuncionario) {
            await axios
                .put("http://localhost:8800/funcionarios/" + onEditFuncionario.id_funcionario, {
                    nome: funcionario.nome.value,
                    endereco: funcionario.endereco.value,
                    telefone: funcionario.telefone.value,
                    id_cargo: funcionario.id_cargo.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800/funcionarios", {
                    nome: funcionario.nome.value,
                    endereco: funcionario.endereco.value,
                    telefone: funcionario.telefone.value,
                    id_cargo: funcionario.id_cargo.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        funcionario.nome.value = ""
        funcionario.endereco.value = ""
        funcionario.telefone.value = ""
        funcionario.id_cargo.value = ""

        setOnEditFuncionario(null);
        getFuncionarios();

    }

    return (
        <div className="formContainer">

            <div class="titleSection">
                <h1>Funcionarios</h1>
            </div>

            <form autoComplete="off" ref={ref} onSubmit={handleSubmit}>

                <div class="inputArea" className="inputArea">
                    <label>Nome<span>*</span></label>
                    <input name="nome" />
                </div>

                <div className="inputArea">
                    <label>Endereço</label>
                    <input name="endereco" />
                </div>

                <div className="inputArea">
                    <label>Telefone</label>
                    <input name="telefone" />
                </div>

                <div className="inputArea">
                    <label>Cargo<span>*</span></label>
                    <select name="id_cargo">
                        {cargos.map(cargo => (
                            <option value={cargo.id_cargo}>{cargo.descricao}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">SALVAR</button>

            </form>
        </div>
    );
};

export default FuncionarioForm;