import jwt from "jsonwebtoken";
import config from "../../config/config";
import { NextFunction, Request, Response } from "express";

// Adding extra field for passing token with request
export interface tokenRequest extends Request{
    token?:string
}

export const createToken = (req: tokenRequest, res: Response, next: NextFunction) => {
    try{
        const payload ={
            userEmail : req.body.email,
            userRole: req.body.role
        }
        const token = jwt.sign(payload, config.jwt_scret as string, {expiresIn: '5d'});
        req.token=token
        next();
    }catch(err){
        console.log(err);
    }
}

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization?.split(" ")[1]; // Removing Bearer from headers
    if(!token){
        res.status(401).send("Unauthorized access!");
    }else{
        // verifying token
        jwt.verify(token, config.jwt_scret as string, (err: any, decoded: any) => {
            if(err){
                res.status(401).send("Unauthorized access!");
            }else{
                next();
            }
        })
    }
}