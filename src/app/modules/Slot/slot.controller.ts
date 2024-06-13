import { Request, Response } from "express";
import { createSlotService } from "./slot.service";

export const createServiceSlot=async(req:Request,res:Response)=>{
    try{
        const slotData = req.body;
        const result = await createSlotService(slotData);
        res.status(200).json({
            success : true,
            statusCode:200,
            message:"Slot created successfully",
            data:result
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message:"An error occured while creating slot",
        })
    }
}