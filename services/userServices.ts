import userRepository from "../repositories/userRepository";
import User from "../Dto/userDto";
import generateHash from "../helpers/generateHash";
import Auth from "../Dto/authDto";

const bcrypt = require("bcryptjs")

class userService {

    static async register(user: User) {
        user.password = await generateHash(user.password);
        return await userRepository.add(user)
    }

    static async auth(auth: Auth) {
        const result: any = await userRepository.login(auth);
        if (result[0].length > 0){
            const isPasswordValid = await bcrypt.compare(auth.password, result[0][0].password);
                if(isPasswordValid){
                    return {logged: true, status: "Succesful Authentication"}
                }
            return{logged: false, status: "Incorrect username or password"}
        }   
        return{logged: false, status: "Incorrect username or password"}
    }

    static async getTickets(email: string) {
        return await userRepository.getTicketes(email);
    }
}

export default userService;