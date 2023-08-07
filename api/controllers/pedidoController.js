import {db} from "../infra/database.js";

export const getPedidos = (_, res) => {

    const q = "SELECT * FROM pedido";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const getPedido = (req, res) => {

    const q = "SELECT * FROM pedido WHERE id_pedido = ?"; // !!! ATUALIZAR

    db.query(q, [req.params.id], (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const addPedido = (req, res) => {

    const q = "INSERT INTO pedido(data, valor_total, descricao, quantidade, id_funcionario, id_cliente, id_produto, id_metodo_pagamento) VALUES(?)"; // !!! ATUALIZAR

    const values = [
        req.body.data,
        req.body.valor_total,
        req.body.descricao,
        req.body.quantidade,
        req.body.id_funcionario,
        req.body.id_cliente,
        req.body.id_produto,
        req.body.id_metodo_pagamento,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pedido cadastrado com sucesso");
    })

}

export const updatePedido = (req, res) => {

    const q = "UPDATE pedido SET data = ?, valor_total = ?, descricao = ?, quantidade = ?, id_funcionario = ?, id_cliente = ?, id_produto = ?, id_metodo_pagamento = ? WHERE id_pedido = ?"; 

    const values = [
        req.body.data,
        req.body.valor_total,
        req.body.descricao,
        req.body.quantidade,
        req.body.id_funcionario,
        req.body.id_cliente,
        req.body.id_produto,
        req.body.id_metodo_pagamento,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pedido atualizado com sucesso");
    })

}

export const deletePedido = (req, res) => {
    const q = "DELETE FROM pedido WHERE id_pedido = ?"; 

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pedido deletado com sucesso");
    })
}