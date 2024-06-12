import { Request, Response } from "express";
import { getAllServiceHandler, getSingleServiceHanlder, serviceRegister } from "./service.service";

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

export const getSingleService=async(req:Request,res:Response)=>{
    try{
        const serviceId = req.params.id;
        const result = await getSingleServiceHanlder(serviceId);
        res.status(200).json({
            success : true,
            statusCode:200,
            message:"Service retrieved successfully",
            data:result
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message:"An error occured while retriving service",
        })
    }
}

export const getAllService=async(req:Request,res:Response)=>{
    try{
        const result = await getAllServiceHandler();
        res.status(200).json({
            success : true,
            statusCode:200,
            message:"Service retrieved successfully",
            data:result
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message:"An error occured while retriving service",
        })
    }
}