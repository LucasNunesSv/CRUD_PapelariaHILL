import {db} from "../infra/database.js";

export const getProdutos = (_, res) => {

    const q = "SELECT * FROM produto";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}