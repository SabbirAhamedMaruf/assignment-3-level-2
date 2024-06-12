import { Request, Response } from "express";
import { serviceRegister } from "./service.service";

export const createService=async(req:Request,res:Response)=>{
    try{
    const serviceData = req.body;
    const result = await serviceRegister(serviceData);
    res.status(200).json({
        success : true,
        statusCode:200,
        message:"Service created successfully",
        data:result
    })
    }catch(error){
        res.status(500).json({
            success : false,
            message:"An error occured while creating service",
        })
    }
}