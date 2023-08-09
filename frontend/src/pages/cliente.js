import "../styles/cliente.css";
import ClienteForm from "../components/ClienteForm.js"
import ClienteGrid from "../components/ClienteGrid.js"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar.js";

const Cliente = () => {

    const [clientes, setClientes] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getClientes = async () => {
        try {
            const res = await axios.get("http://localhost:3306/clientes");
            // setClientes(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
            setClientes(res.data);
            console.log(res.data)
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        getClientes();
    }, [setClientes]);

    return (
        <div className="container">
            <NavBar />
            <div className="container-clientes">
                <h2>CLIENTES</h2>
            </div>
            <select name="" id="">{clientes.map(cliente => (
                <option value={cliente.id}>{cliente.nome}</option>
            ))}</select>
            <ClienteForm onEdit={onEdit} setOnEdit={setOnEdit} getClientes={getClientes} />
            <ClienteGrid clientes={clientes} setOnEdit={setOnEdit} getClientes={getClientes} />

        </div>
    );
};

export default Cliente;