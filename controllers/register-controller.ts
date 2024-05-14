import { Request, Response } from "express";
import userService from "../services/userServices";
import User from "../Dto/userDto";

let register = async (req: Request, res: Response) => {
    try {
        const {
            email,
            password,
            names,
            lastNames,
            adress,
        } = req.body
        
        const registerUser = await userService.register(new User(email, password, names, lastNames, adress));
        return res.status(201).send(
            { status: 'register ok'}
        );

    } catch (error: any) {
        if (error && error.code == "ERR_DUP_ENTRY") {
            return res.status(500).send( { errorInfo: error.sqlMessage } )
        }
    }
}

export default register;