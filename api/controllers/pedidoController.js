import { db } from "../infra/database.js";

export const getPedidos = (_, res) => {

    const q = "SELECT pedido.id_pedido, DATE_FORMAT(pedido.data, '%d/%m/%Y') AS data, pedido.valor_total, pedido.descricao AS descricao_pedido, pedido.quantidade, funcionario.nome AS funcionario_nome, cliente.nome AS cliente_nome, produto.nome AS produto_nome, metodo_pagamento.descricao AS metodo_pagamento FROM pedido JOIN produto ON pedido.id_produto = produto.id_produto JOIN metodo_pagamento ON pedido.id_metodo_pagamento = metodo_pagamento.id_metodo_pagamento JOIN cliente ON pedido.id_cliente = cliente.id_cliente JOIN funcionario ON pedido.id_funcionario = funcionario.id_funcionario";

    db.query(q, (err, data) => {

        if (err) return res.json(err);

        return res.status(200).json(data);

    })

}

export const getPedido = (req, res) => {

    const q = "SELECT * FROM pedido WHERE id_pedido = ?";

    db.query(q, [req.params.id], (err, data) => {

        if (err) return res.json(err);

        return res.status(200).json(data);

    })

}

export const addPedido = (req, res) => {

    const q1 = "SELECT estoque FROM produto WHERE id_produto = ?";
    const q2 = "INSERT INTO pedido(data, valor_total, descricao, quantidade, id_funcionario, id_cliente, id_produto, id_metodo_pagamento) VALUES(?)";
    const q3 = "UPDATE produto SET estoque = estoque - ? WHERE id_produto = ?";

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

    db.query(q1, [req.body.id_produto], (err, result) => {

        if (err) return res.json(err);

        const estoqueDisponivel = result[0].estoque;

        if (estoqueDisponivel >= req.body.quantidade) {

            db.query(q2, [values], (err) => {
                if (err) return res.json(err);

                // Após a inserção bem-sucedida do pedido, decrementa o estoque
                db.query(q3, [req.body.quantidade, req.body.id_produto], (err) => {
                    if (err) return res.json(err);

                    return res.status(200).json("Pedido cadastrado com sucesso e estoque atualizado");
                });

            });

        } else {
            return res.status(400).json({ message: "Quantidade Inválida, Estoque atual: " + estoqueDisponivel });
        }

    });

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
        if (err) return res.json(err);

        return res.status(200).json("Pedido atualizado com sucesso");
    })

}

export const deletePedido = (req, res) => {
    const q = "DELETE FROM pedido WHERE id_pedido = ?";

    db.query(q, [req.params.id], (err) => {
        if (err) return res.json(err);

        return res.status(200).json("Pedido deletado com sucesso");
    })
}