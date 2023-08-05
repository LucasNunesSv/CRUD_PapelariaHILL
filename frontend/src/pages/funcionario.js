import "../styles/funcionario.css";
import FuncionarioForm from "../components/FuncionarioForm.js"
import FuncionarioGrid from "../components/FuncionarioGrid.js"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Funcionario = () => {

    const [funcionarios, setfuncionarios] = useState([]);
    const [onEditFuncionario, setOnEditFuncionario] = useState(null);
    const [cargos, setCargos] = useState([]);

    const getFuncionarios = async () => {
        try{
            const res = await axios.get("http://localhost:8800/funcionarios");
            setfuncionarios(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
        }catch (error) {
            toast.error(error);
        }
    }

    const getCargos = async () => {
        try{
            const res1 = await axios.get("http://localhost:8800/cargos");
            setCargos(res1.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
        }catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        getFuncionarios();
    }, [setfuncionarios]);

    useEffect(() => {
        getCargos();
    }, [setCargos]);

    return (
        <div className="container">
           <h2>FUNCIONARIOS</h2> 
           <select name="" id="">{cargos.map(cargo => (
                <option value={cargo.id_cargo}>{cargo.descricao}</option>
           ))}</select>
           <FuncionarioForm onEditFuncionario={onEditFuncionario} setOnEditFuncionario={setOnEditFuncionario} getFuncionarios={getFuncionarios} cargos={cargos} getCargos={getCargos}/>
           <FuncionarioGrid funcionarios={funcionarios} setOnEditFuncionario={setOnEditFuncionario} getFuncionarios={getFuncionarios} cargos={cargos}/>
           
        </div>
    );
};

export default Funcionario;