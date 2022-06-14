import { Request, response, Response } from 'express';
import { Op } from 'sequelize';
import { User } from '../models/UserModel';



//Listar todos os usuários do banco
export const allUsers = async (req: Request, res: Response) => {
    try {
        let users = await User.findAll();
        res.json(users);
    } catch (e) {
        res.json({
            "Erro:": e
        });
    }
}
//Persistir usuario no banco
export const saveUser = async (req: Request, res: Response) => {
    try {
        let user = await User.create({
            id: req.body.id,
            nome: req.body.nome,
            idade: req.body.idade
        });
        res.status(201).json(user);
    } catch (e) {
        res.json({
            "erro:": e
        })
    }
}

//Deletar usuario do banco
export const deleteUser = async (req: Request, res: Response) => {
    let id: string = req.params.id;
    let user = await User.findByPk(id);
    if (user) {
        await user.destroy();
        res.json(
            {
                "message": "Usuario excluido com sucesso!"
            }
        )
    } else {
        res.json({
            "message": "Usuário não existente"
        })
    }

}


















// export const cliente = async (req: Request, res: Response) => {

//     try {
//         let nome: string = req.query.nome as string;
//         let users = await User.findAll({
//             where: {
//                 nome: {
//                     [Op.like]: [nome]
//                 }
//             }

//         });
//         let usuCad: any[] = [];
//         let usuarios = JSON.parse(JSON.stringify(users));

//         usuarios.map(function (element: any) {
//             usuCad.push(element);
//             //console.log("appended elements:", usuCad);

//         });
//         console.log("usuario 1", usuCad[0].nome);
//         console.log("usuario 2", usuCad[1].idade);
//         console.log(clienteDao.findClientes);
//         //res.render('cliente', { users: users });
//         res.json(usuarios);
//         res.status(200);
//     } catch (error) {
//         console.log("Deu erro:", error);
//     }

// };

