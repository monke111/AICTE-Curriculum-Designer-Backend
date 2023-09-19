import express from 'express';
import { getAllUsers, getUserById } from '../controllers/usersController';
const router = express.Router();

router.get('/', getAllUsers).get('/:id', getUserById)



module.exports = router;

