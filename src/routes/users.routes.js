import { Router } from 'express';
import { createUser, getUserById, getUsers } from '../controllers/users.controller.js';
const router = Router();

// GET all users
router.get('/users', getUsers);

// GET user by ID
router.get('/users/:id', getUserById);

// CREATE new user
router.post('/users', createUser);

// UPDATE user
router.patch('/users/:id', (req, res) => {
    res.send("Update user endpoint - to be implemented");
});

// DELETE user
router.delete('/users/:id', (req, res) => {
    res.send("Delete user endpoint - to be implemented");
});

export default router;