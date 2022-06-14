import Router from 'express';
import * as userController from '../controllers/userController';
import * as clienteController from '../controllers/clienteController';



const router = Router();
router.get('/cadastro',);
router.get('/users', userController.allUsers)
router.post('/users/cadastro', userController.saveUser);
router.delete('/users/del/:id', userController.deleteUser);
router.get('/clientes', clienteController.findAllClientes);
router.get('/teste', clienteController.findAllUsers);



export { router };