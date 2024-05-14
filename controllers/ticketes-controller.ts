import { Request, Response } from "express";
import userService from "../services/userServices";

let getTicketes = async (req: Request, res: Response) => {
    try {
        const emailUser = req.query.email as string;
        const getMyTickets = await userService.getTicketes(emailUser)
    } catch (error) {
        
    }
}