import { Request, Response } from "express";
import { createUserService, isUserExitsService } from "./user.service";
import { tokenRequest } from "../../middlewares/Auth/auth";

export const createUser=async(req:Request,res:Response)=>{
    try{
        const userData = req.body;
        const result = await createUserService(userData);
        res.status(200).json({
            status : true,
            statusCode:200,
            message:"User registered successfully",
            data:result
        })
    }catch(error){
        res.status(500).json({
            status : false,
            message:"An error occured while creating user",
        })
    }
}

export const loginUser=async(req:tokenRequest,res:Response)=>{
    try{
        const userData = req.body;
        const token = req.token;
        const result = await isUserExitsService(userData);
        res.status(200).json({
            status : true,
            statusCode:200,
            message:"User logged in successfully",
            data:result,
            token:token
        })
    }catch(error){
        res.status(500).json({
            status : false,
            message:"User does not exits",
        })
    }
}