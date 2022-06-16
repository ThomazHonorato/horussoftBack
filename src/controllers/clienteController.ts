import { Request, response, Response } from 'express';
import { sequelize } from '../instances/mysql';
import { Op, QueryTypes } from 'sequelize';


let query = "SELECT F.cli_num, c.cli_nome FROM clientes c, faturam_cad F WHERE F.fat_tipo = 1 AND c.cli_num = F.cli_num AND F.fil_num = 1AND F.fat_emissao BETWEEN CAST('01/09/2021 00:00:01' AS DATETIME) AND CAST('23/05/2022 23:59:59' AS DATETIME) AND  (F.fat_faturado <> 2 OR F.fat_faturado IS NULL)AND F.fat_consig = 0 AND F.fat_cancelada = 0 AND F.fat_status = 1 AND F.fat_consig = 0 GROUP BY F.cli_num, c.cli_nome;"
let query1 = "SELECT F.cli_num, c.cli_nome FROM clientes c, faturam_cad F WHERE F.fat_tipo = 1 AND c.cli_num = F.cli_num AND F.fil_num = 1AND F.fat_emissao BETWEEN CONVERT(VARCHAR(100),'01/09/2021 00:00:01' ,103) AND CONVERT(VARCHAR(100),'23/05/2022 23:59:59',103) AND  (F.fat_faturado <> 2 OR F.fat_faturado IS NULL)AND F.fat_consig = 0 AND F.fat_cancelada = 0 AND F.fat_status = 1 AND F.fat_consig = 0 GROUP BY F.cli_num, c.cli_nome;"
export const findAllClientes = async (req: Request, res: Response) => {
    let resultado;
    try {
        resultado = await sequelize.query(query1, { type: QueryTypes.SELECT });
        res.json(resultado);
    } catch (e) {
        res.json({
            "Erro:": e
        });
        console.log(e);
        //console.log(resultado);
    }
}

export const findAllUsers = async (req: Request, res: Response) => {
    let resultado;
    try {
        resultado = await sequelize.query("SELECT nome from `users`", { type: QueryTypes.SELECT });
        res.json(resultado);
    } catch (e) {
        res.json({
            "Erro:": e
        });
    }
}