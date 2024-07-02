import express from 'express';
import { signup, login, updateUser, deleteUser, listUsers, searchUsers } from '../controllers/userController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.put('/update/:id', auth, updateUser);
router.delete('/delete/:id', auth, deleteUser);
router.get('/list', auth, listUsers);
router.get('/search', auth, searchUsers);

export default router;
