import {db} from "../infra/database.js";

export const getPedidos = (_, res) => {

    const q = "SELECT * FROM pedido";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const getPedido = (req, res) => {

    const q = "SELECT * FROM cliente WHERE id_cliente = ?"; // !!! ATUALIZAR

    db.query(q, [req.params.id], (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const addPedido = (req, res) => {

    const q = "INSERT INTO cliente(nome, endereco, telefone) VALUES(?)"; // !!! ATUALIZAR

    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pedido cadastrado com sucesso");
    })

}

export const updatePedido = (req, res) => {

    const q = "UPDATE cliente SET nome = ?, endereco = ?, telefone = ? WHERE id_cliente = ?"; // !!! ATUALIZAR

    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pedido atualizado com sucesso");
    })

}

export const deletePedido = (req, res) => {
    const q = "DELETE FROM cliente WHERE id_cliente = ?"; // !!! ATUALIZAR

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Pedido deletado com sucesso");
    })
}