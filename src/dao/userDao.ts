import { Request, Response } from 'express';
import { User } from "../models/UserModel";


export const findUsers = async (req: Request, res: Response) => {
    try {
        let clientes = await User.findAll()
        return res.json(clientes);
    } catch (Error) {
        console.log("Erro:", Error);
    }
}