import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import path from 'path';
import mustache from 'mustache-express';
import { router } from './routes/routes';


dotenv.config();

const server = express();
server.use(express.json());


//configuração do mustache
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

//chamando as rotas
server.use(express.static(path.join(__dirname, '../public')));
server.use(express.urlencoded({ extended: true }));

server.use(router);
server.use((req: Request, res: Response) => {
    res.status(404).json({
        "Pagina não encontrada": "Erro 404"
    })
});

//mostrando a porta que o server ta usando
server.listen(process.env.SERVER_PORT);
console.log(`Server operando na porta:${process.env.SERVER_PORT}`);

