import "../styles/App.css";
import Form from "../components/Form.js"
import Grid from "../components/Grid.js"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cliente = () => {

    const [clientes, setClientes] = useState([]);
    const [onEdit, setOnEdit] = useState(null);

    const getClientes = async () => {
        try{
            const res = await axios.get("http://localhost:8800/clientes");
            setClientes(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
        }catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        getClientes();
    }, [setClientes]);

    return (
        <div className="container">
           <h2>CLIENTES</h2> 
           <select name="" id="">{clientes.map(cliente => (
                <option value={cliente.id}>{cliente.nome}</option>
           ))}</select>
           <Form onEdit={onEdit} setOnEdit={setOnEdit} clientes={clientes} getClientes={getClientes} />
           <Grid clientes={clientes} setOnEdit={setOnEdit} getClientes={getClientes}/>
           
        </div>
    );
};

export default Cliente;