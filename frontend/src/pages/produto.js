import "../styles/produto.css";
import ProdutoForm from "../components/ProdutoForm.js"
import ProdutoGrid from "../components/ProdutoGrid.js"
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "../components/NavBar";

const Produto = () => {

    const [produtos, setProdutos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [onEditProduto, setOnEditProduto] = useState(null);

    const getProdutos = async () => {
        try {
            const res = await axios.get("http://localhost:8800/produtos");
            setProdutos(res.data);
        } catch (error) {
            toast.error(error);
        }
    }

    const getCategorias = async () => {
        try {
            const res = await axios.get("http://localhost:8800/categorias");
            setCategorias(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
        } catch (error) {
            toast.error(error);
        }
    }

    useEffect(() => {
        getProdutos();
    }, [setProdutos]);

    useEffect(() => {
        getCategorias();
    }, [setCategorias]);

    return (
        <div className="container">
            <NavBar />
            <h2>PRODUTOS</h2>
            <select name="" id="">{produtos.map(produto => (
                <option value={produto.id_produto}>{produto.nome}</option>
            ))}</select>
            <ProdutoForm onEditProduto={onEditProduto} setOnEditProduto={setOnEditProduto} getProdutos={getProdutos} categorias={categorias} />
            <ProdutoGrid produtos={produtos} setOnEditProduto={setOnEditProduto} getProdutos={getProdutos} categorias={categorias} />

        </div>
    );
};

export default Produto;