import e, { NextFunction, Request, Response } from "express";

export const isAdmin=(role:string)=>{
    return (req:Request,res:Response,next:NextFunction)=>{
        if(role==="admin"){
            next();
        }else{
            res.status(401).send("Unauthorized access!");
        }
    }
}