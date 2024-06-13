import mongoose from "mongoose";
import { generateSlots } from "../../utils/slots";
import ServiceModel from "../Service/service.model";
import SlotModel from "./slot.model";

export const createSlotService=async(data:any)=>{
    const startTime = data.startTime;
    const startTimeData = startTime?.split(":");
    const endTime = data.endTime;
    const endTimeData = endTime?.split(":");

    const currentServiceData = await ServiceModel.findOne({_id:data.service})
    const serviceDuration : any = currentServiceData?.duration;
    const slots = generateSlots(startTime, endTime, serviceDuration)

    let slotData : Object[] = []
       for(let i=0;i<slots.length-1;i++){   
            if(parseInt(endTimeData[0])>parseInt(startTimeData[0])){
             const result = {
                 service:data.service,
                 date:data.date,
                 startTime:slots[i],
                 endTime:slots[i+1],
                 isBooked:"available"
             }
             slotData.push(result);
            }
         }

        const result = await SlotModel.insertMany(slotData);
        return result;
}  

export const getAllSlotsService=async()=>{
    const result = await SlotModel.aggregate([
        {
          $lookup: {
            from: 'services',
            localField: 'service',
            foreignField: '_id',
            as: 'serviceData'
          }
        },
        {
          $unwind: '$serviceData'
        },
        {
          $project: {
            _id: 1,
            service: '$serviceData',
            date: 1,
            startTime: 1,
            endTime: 1,
            isBooked: 1
          }
        }
      ]);
    
      return result;
    }

