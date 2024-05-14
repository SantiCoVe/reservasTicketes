import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { log } from "console";

dotenv.config();

interface JwtPayload {
    email: string,
    exp: number,
    iat: number
}

const validateToken = async (req: Request, res: Response, next: NextFunction) => {
    let headerToken = req.get('Authorization');
    if (headerToken) {
        const bearerToken = headerToken.split(' ')[1];
        if (!bearerToken) {
            return res.status(401).json({ status: 'No se envio ningun token' });
        }
        try {
            let tokenValido = jwt.verify(bearerToken, process.env.SECRET as string) as JwtPayload;
            req.body.email = tokenValido.email;
            console.log(tokenValido);
            next();
        }catch (error) {
            if (error instanceof jwt.TokenExpiredError) {
                return res.status(403).json({ status: 'token expirado' });
            } else if (error instanceof jwt.JsonWebTokenError) {
                return res.status(403).json({ status: 'Token invalido' });
            } else {
                return res.status(500).json({ status: 'Error interno del servidor' });
            }
        }
    } else {
        res.status(403).json({ status: 'Acceso denegado: Header requerido'})
    }
}

export default validateToken;