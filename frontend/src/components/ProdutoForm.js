import React, { useRef, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ProdutoForm({ onEditProduto, setOnEditProduto, getProdutos, categorias }) {

    const ref = useRef();

    useEffect(() => {
        if (onEditProduto) {
            const produto = ref.current;

            produto.nome.value = onEditProduto.nome;
            produto.descricao.value = onEditProduto.descricao;
            produto.preco_unitario.value = onEditProduto.preco_unitario;
            produto.marca.value = onEditProduto.marca;
            produto.estoque.value = onEditProduto.estoque;
            produto.id_categoria_produto.value = onEditProduto.id_categoria_produto;

        }
    }, [onEditProduto]);

    const handleSubmit = async (e) => {
        
        e.preventDefault();

        const produto = ref.current;

        if (
            !produto.nome.value ||
            !produto.descricao.value ||
            !produto.preco_unitario.value ||
            !produto.marca.value ||
            !produto.estoque.value ||
            !produto.id_categoria_produto.value

        ) {
            return toast.warn("Preencha todos os campos obrigatórios")
        }

        if (onEditProduto) {
            await axios
                .put("http://localhost:8800/produtos/" + onEditProduto.id_produto, {
                    nome: produto.nome.value,
                    descricao: produto.descricao.value,
                    preco_unitario: produto.preco_unitario.value,
                    marca: produto.marca.value,
                    estoque: produto.estoque.value,
                    id_categoria_produto: produto.id_categoria_produto.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        } else {
            await axios
                .post("http://localhost:8800/produtos", {
                    nome: produto.nome.value,
                    descricao: produto.descricao.value,
                    preco_unitario: produto.preco_unitario.value,
                    marca: produto.marca.value,
                    estoque: produto.estoque.value,
                    id_categoria_produto: produto.id_categoria_produto.value,
                })
                .then(({ data }) => toast.success(data))
                .catch(({ data }) => toast.error(data));
        }

        produto.nome.value = ""
        produto.descricao.value = ""
        produto.preco_unitario.value = ""
        produto.marca.value = ""
        produto.estoque.value = ""
        produto.id_categoria_produto.value = ""

        setOnEditProduto(null);
        getProdutos();

    }

    return (
        <div className="formContainer">

            <h3>FORM</h3>

            <form ref={ref} onSubmit={handleSubmit}>

                <div className="inputArea">
                    <label>Nome</label>
                    <input name="nome" />
                </div>

                <div className="inputArea">
                    <label>Descrição</label>
                    <input name="descricao" />
                </div>

                <div className="inputArea">
                    <label>Preço Unitário</label>
                    <input name="preco_unitario" />
                </div>

                <div className="inputArea">
                    <label>Marca</label>
                    <input name="marca" />
                </div>

                <div className="inputArea">
                    <label>Estoque</label>
                    <input name="estoque" />
                </div>

                <div className="inputArea">
                    <label>Categoria</label>
                    <select name="id_categoria_produto">
                        {categorias.map(categoria => (
                            <option value={categoria.id_categoria_produto}>{categoria.descricao}</option>
                        ))}
                    </select>
                </div>

                <button type="submit">SALVAR</button>

            </form>
        </div>
    );
};

export default ProdutoForm;