import {db} from "../infra/database.js";

export const getProdutos = (_, res) => {

    const q = "SELECT produto.id_produto, produto.nome, produto.preco_unitario, produto.marca, produto.estoque, categoria_produto.descricao AS categoria_produto FROM produto JOIN categoria_produto ON produto.id_categoria_produto = categoria_produto.id_categoria_produto";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const getProduto = (req, res) => {

    const q = "SELECT * FROM produto WHERE id_produto = ?"; 

    db.query(q, [req.params.id], (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const addProduto = (req, res) => {

    const q = "INSERT INTO produto(nome, preco_unitario, marca, estoque, id_categoria_produto) VALUES(?)"; 

    const values = [
        req.body.nome,
        req.body.preco_unitario,
        req.body.marca,
        req.body.estoque,
        req.body.id_categoria_produto,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto cadastrado com sucesso");
    })

}

export const updateProduto = (req, res) => {

    const q = "UPDATE produto SET nome = ?, preco_unitario = ?, marca = ?, estoque = ?, id_categoria_produto = ? WHERE id_produto = ?"; 

    const values = [
        req.body.nome,
        req.body.preco_unitario,
        req.body.marca,
        req.body.estoque,
        req.body.id_categoria_produto,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto atualizado com sucesso");
    })

}

export const deleteProduto = (req, res) => {
    const q = "DELETE FROM produto WHERE id_produto = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Produto deletado com sucesso");
    })
}