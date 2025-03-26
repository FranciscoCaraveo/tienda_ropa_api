import { pool } from "../db.js";

class UserModel {
    static async getUsers() {
        const [rows] = await pool.query('SELECT * FROM users');
        return rows;
    }

    static async getUserById(id) {
        const [rows] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);
        return rows[0];
    }

    static async createUser(userData) {
        const { username, email, password, name, phone } = userData;
        const [result] = await pool.query(
            'INSERT INTO users (username, email, password, name, phone) VALUES (?, ?, ?, ?, ?)',
            [username, email, password, name, phone]
        );
        return { id: result.insertId, ...userData };
    }
}

export default UserModel;