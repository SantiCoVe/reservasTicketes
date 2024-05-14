import db from '../config/config-db';
import Auth from '../Dto/authDto';
import User from '../Dto/userDto';

class userRepository {

    static async add(user: User) {
        const sql = 'INSERT INTO users (email, password, nombres, apellidos, direccion) VALUES (?, ?, ?, ?, ?)';
        const values = [user.email, user.password, user.nombres, user.apellidos, user.direccion];
        return db.execute(sql, values)
    }

    static async login(auth: Auth) {
        const sql = 'SELECT password FROM users WHERE email = ?'
        const values = [auth.email]
        return db.execute(sql, values);
    }

    static async getTicketes(email: string) {

    }
}

export default userRepository;