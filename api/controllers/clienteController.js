import {db} from "../infra/database.js";

export const getClientes = (_, res) => {

    const q = "SELECT * FROM cliente ORDER BY nome";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const getCliente = (req, res) => {

    const q = "SELECT * FROM cliente WHERE id_cliente = ?";

    db.query(q, [req.params.id], (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const addCliente = (req, res) => {

    const q = "INSERT INTO cliente(nome, endereco, telefone) VALUES(?)";

    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cliente cadastrado com sucesso");
    })

}

export const updateCliente = (req, res) => {

    const q = "UPDATE cliente SET nome = ?, endereco = ?, telefone = ? WHERE id_cliente = ?";

    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cliente atualizado com sucesso");
    })

}

export const deleteCliente = (req, res) => {
    const q = "DELETE FROM cliente WHERE id_cliente = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Cliente deletado com sucesso");
    })
}