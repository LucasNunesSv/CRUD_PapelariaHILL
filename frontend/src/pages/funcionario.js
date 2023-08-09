import "../styles/funcionario.css";
import FuncionarioForm from "../components/FuncionarioForm.js"
import FuncionarioGrid from "../components/FuncionarioGrid.js"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar.js";


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
            const res = await axios.get("http://localhost:8800/cargos");
            setCargos(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
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
            <NavBar />
           <FuncionarioForm onEditFuncionario={onEditFuncionario} setOnEditFuncionario={setOnEditFuncionario} getFuncionarios={getFuncionarios} cargos={cargos} />
           <FuncionarioGrid funcionarios={funcionarios} setOnEditFuncionario={setOnEditFuncionario} getFuncionarios={getFuncionarios} />
           
        </div>
    );
};

export default Funcionario;