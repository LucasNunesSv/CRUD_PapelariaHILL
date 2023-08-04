import {db} from "../infra/database.js";

export const getCategorias = (_, res) => {

    const q = "SELECT * FROM categoria_produto";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}
