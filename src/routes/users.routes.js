import {Router} from 'express'
import {pool} from '../db.js'
import { getUsers,getUserById,createUser,updateUser,deleteUser } from '../controllers/users.controlles.js';

const router = Router();

router.get('/users',getUsers);

router.get('/users/:id',getUserById);

router.post('/users',createUser);

router.delete('/users/:id',updateUser);

router.put('/users/:id',deleteUser);

export default router;