import {db} from "../db.js"

export const getEmployees = (_, res) => {
    const q = "SELECT * FROM funcionario"

    db.query(q, (err, data) => {
        if(err) return res.json(err);
        return res.status(200).json(data); 
    })
}