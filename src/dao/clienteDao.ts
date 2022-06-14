import { Request, Response } from 'express';
import { Op, QueryTypes } from 'sequelize';
import { sequelize } from '../instances/mysql';
import { User } from "../models/UserModel";


export const findClientes = async (req: Request, res: Response) => {
    try {
        let clientes = await User.findAll()
        res.json(clientes);
    } catch (Error) {
        console.log("Erro:", Error);
    }
}

export const findAll = async (req: Request, res: Response) => {
    let resultado = await sequelize.query("SELECT * from `users`", { type: QueryTypes.SELECT });
    res.send(resultado);
}

// export const saveCliente = async (req: Request, res: Response) => {
//     try {
//         let user = await User.create({
//             id: req.body.id_user,
//             nome: req.body.body,
//             idade: req.body.idade
//         })
//         res.status(201).json(user);
//     } catch (e) {
//         res.status(400);
//     }
// }


