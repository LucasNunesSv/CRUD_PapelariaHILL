import PedidoForm from "../components/PedidoForm.js"
import PedidoGrid from "../components/PedidoGrid.js"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar.js";


const Pedido = () => {

    const [pedidos, setPedidos] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [funcionarios, setFuncionarios] = useState([]);
    const [produtos, setProdutos] = useState([]);
    const [pagamentos, setPagamentos] = useState([]);
    const [onEditPedido, setOnEditPedido] = useState(null);

    const getPedidos = async () => {
        try{
            const res = await axios.get("http://localhost:8800/pedidos");
            setPedidos(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
        }catch (error) {
            toast.error(error);
        }
    }

    const getClientes = async () => {
        try{
            const res = await axios.get("http://localhost:8800/clientes");
            setClientes(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
        }catch (error) {
            toast.error(error);
        }
    }

    const getFuncionarios = async () => {
        try{
            const res = await axios.get("http://localhost:8800/funcionarios");
            setFuncionarios(res.data.sort((a,b) => (a.nome > b.nome ? 1 : -1)));
        }catch (error) {
            toast.error(error);
        }
    }

    const getProdutos = async () => {
        try{
            const res = await axios.get("http://localhost:8800/produtos");
            setProdutos(res.data);
        }catch (error) {
            toast.error(error);
        }
    }

    const getPagamentos = async () => {
        try{
            const res = await axios.get("http://localhost:8800/pagamentos");
            setPagamentos(res.data);
        }catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        getPedidos();
    }, [setPedidos]);

    useEffect(() => {
        getClientes();
    }, [setClientes]);

    useEffect(() => {
        getFuncionarios();
    }, []);

    useEffect(() => {
        getProdutos();
    }, []);

    useEffect(() => {
        getPagamentos();
    }, [setPagamentos]);

    return (
        <div className="container">
            <NavBar />
           <PedidoForm onEditPedido={onEditPedido} setOnEditPedido={setOnEditPedido} getPedidos={getPedidos} clientes={clientes} funcionarios={funcionarios} produtos={produtos} pagamentos={pagamentos} />
           <PedidoGrid pedidos={pedidos} setOnEditPedido={setOnEditPedido} getPedidos={getPedidos} />
        </div>
    );
};

export default Pedido;