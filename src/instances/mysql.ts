import { Sequelize } from '../../node_modules/sequelize';
import dotenv from 'dotenv';
import * as tedious from 'tedious';





//CONEXÃO COM BANCOTESTE
// export const sequelize = new Sequelize(
//     process.env.DB2_NAME as string,
//     process.env.DB2_USER as string,
//     process.env.DB2_PASS as string,
//     {
//         dialect: 'mysql'
//     }
// );

//CONEXÃO COM BANCO TANAMAO APP
export const sequelize = new Sequelize(
    process.env.DB_NAME as string,
    process.env.DB_USER as string,
    process.env.DB_PASS as string,
    {
        host: process.env.DB_HOST,
        dialect: 'mssql',
        dialectModule: tedious,
        port: parseInt(process.env.DB_PORT as string),

    },

);


try {
    //sequelize.authenticate()
    console.log("Conection Sucessfull");
} catch (e) {
    console.log("Conection Unsucessfull");
}




