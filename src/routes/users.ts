import express from 'express';
import { createUser, getAllUsers, getUserById } from '../controllers/usersController';
const router = express.Router();

router.get('/', getAllUsers).get('/:id', getUserById)
router.post ('/create', createUser)



module.exports = router;

