import {db} from "../db.js"

export const getClients = (_, res) => {
    const q = "SELECT * FROM cliente"

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data); 
    })
}