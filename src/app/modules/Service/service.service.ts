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