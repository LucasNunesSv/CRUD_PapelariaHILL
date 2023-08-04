import {db} from "../infra/database.js";

export const getPagamentos = (_, res) => {

    const q = "SELECT * FROM metodo_pagamento";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}
