import { Request, response, Response } from 'express';
import { sequelize } from '../instances/mysql';
import { QueryTypes } from 'sequelize';


let query = "SELECT F.cli_num, c.cli_nome FROM clientes c, faturam_cad F WHERE F.fat_tipo = 1 AND c.cli_num = F.cli_num AND F.fil_num = 1 AND F.fat_emissao BETWEEN CAST('2021/09/01 00:00:01' AS DATETIME) AND CAST('2022/05/23 23:59:59' AS DATETIME) AND  (F.fat_faturado <> 2 OR F.fat_faturado IS NULL)AND F.fat_consig = 0 AND F.fat_cancelada = 0 AND F.fat_status = 1 AND F.fat_consig = 0 GROUP BY F.cli_num, c.cli_nome;"
let resultado: any;

//filtrando todos os clientes pela data
export const findAllClientes = async (req: Request, res: Response) => {

    try {
        resultado = await sequelize.query(query, { type: QueryTypes.SELECT });
        res.status(200).json(resultado);
    } catch (e) {
        res.json({
            "Erro:": e
        });
        console.log(e);
    }

    mapAllClients();
}

// Criando um array de objetos javascript com o retorno do banco
export const mapAllClients = () => {
    let mappedClients: any[] = [];
    let clientes = JSON.parse(JSON.stringify(resultado));
    clientes.map(function (element: any) {
        mappedClients.push(element);
    });
    console.log(mappedClients[228]);
}






// export const findAllUsers = async (req: Request, res: Response) => {
//     let resultado;
//     try {
//         resultado = await sequelize.query("SELECT nome from `users`", { type: QueryTypes.SELECT });
//         res.json(resultado);
//     } catch (e) {
//         res.json({
//             "Erro:": e
//         });
//     }
// }