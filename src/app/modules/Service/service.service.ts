import ServiceModel from "./service.model"

export const serviceRegister=(data:any)=>{
    const result = ServiceModel.create(data);
    return result;
}