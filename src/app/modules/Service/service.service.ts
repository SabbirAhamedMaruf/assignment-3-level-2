import ServiceModel from "./service.model"

export const serviceRegister=(data:any)=>{
    const result = ServiceModel.create(data);
    return result;
}

export const getSingleServiceHanlder=(serviceId:string)=>{
    const result = ServiceModel.findOne({_id:serviceId});
    return result;
}

export const getAllServiceHandler=()=>{
    const result = ServiceModel.find();
    return result;
}

export const updateSingleService=async(data:any,serviceId:string)=>{
    const currentData : any = await ServiceModel.findOne({_id:serviceId});
    const updatedData = {...currentData.toObject(),...data}
    const result = ServiceModel.updateOne({_id:serviceId},updatedData);
    return result;
}