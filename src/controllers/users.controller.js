import UserModel from "../models/users.model.js";

export const getUsers = async function (req, res) {
    try {
        const users = await UserModel.getUsers();
        res.json(users);
    } catch (error) {
        console.error('Full error object:', error);
        res.status(500).json({
            error: error.message || 'Unknown database error',
            code: error.code,
            sqlState: error.sqlState,
            sqlMessage: error.sqlMessage
        });
    }
};

export const getUserById = async function (req, res) {
    try {
        const { id } = req.params;
        const user = await UserModel.getUserById(id);

        if (!user) {
            return res.status(404).json({ message: "User not found ma broda" });
        }

        res.json(user);
    } catch {
        console.error('Error fetching user by ID: ', error);
        res.status(500).json({
            error: error.message || 'Failed to getUser:( ',
            code: error.code,
            sqlState: error.sqlState,
            sqlMessage: error.sqlMessage
        });
    }
}

export const createUser = async function (req, res) {
    try {
        const userData = req.body;
        
        if (!userData) {
            return res.status(400).json({ message: 'Missing request body' });
        }
        

        if (!userData.name || !userData.email) {
            return res.status(400).json({ message: 'Name and email are required fields' });
        }
        
        const newUser = await UserModel.createUser(userData);
        res.status(201).json({
            message: 'User created successfully',
            user: newUser
        });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({
            error: error.message || 'Failed to create user'
        });
    }
};