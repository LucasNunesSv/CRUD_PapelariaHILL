import {db} from "../infra/database.js";

export const getCargos = (_, res) => {

    const q = "SELECT * FROM cargos";

    db.query(q, (err, data) => {

        if(err) return res.json(err);
        
        return res.status(200).json(data);

    })

}
