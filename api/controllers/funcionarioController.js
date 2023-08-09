import {db} from "../infra/database.js";

export const getFuncionarios = (_, res) => {

    const q = "SELECT funcionario.id_funcionario, funcionario.nome, funcionario.endereco, funcionario.telefone, cargo.descricao AS cargo FROM funcionario JOIN cargo ON funcionario.id_cargo = cargo.id_cargo ORDER BY nome, cargo";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const getFuncionario = (req, res) => {

    const q = "SELECT * FROM funcionario WHERE id_funcionario = ?";

    db.query(q, [req.params.id], (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}

export const addFuncionario = (req, res) => {

    const q = "INSERT INTO funcionario(nome, endereco, telefone, id_cargo) VALUES(?);"
    
    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
        req.body.id_cargo,
    ];

    db.query(q, [values], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Funcionário cadastrado com sucesso");
    })

}

export const updateFuncionario = (req, res) => {

    const q = "UPDATE funcionario SET nome = ?, endereco = ?, telefone = ?, id_cargo = ? WHERE id_funcionario = ?";

    const values = [
        req.body.nome,
        req.body.endereco,
        req.body.telefone,
        req.body.id_cargo,
    ];

    db.query(q, [...values, req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Funcionário atualizado com sucesso");
    })

}

export const deleteFuncionario = (req, res) => {
    const q = "DELETE FROM funcionario WHERE id_funcionario = ?";

    db.query(q, [req.params.id], (err) => {
        if(err) return res.json(err);

        return res.status(200).json("Funcionário deletado com sucesso");
    })
}