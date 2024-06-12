import { User } from "./user.interface";
import UserModel from "./user.model";

export const createUserService=async(data:User)=>{
    const result = await UserModel.create(data);
    const modifedResult={
        _id:result._id,
        name:result.name,
        email:result.email,
        phone:result.phone,
        role:result.role,
        address:result.address,
        createdAt:result.createdAt,
        updatedAt:result.updatedAt
    }
    return modifedResult;
}

export const isUserExitsService=async(data:any)=>{
    const result : any = await UserModel.findOne({email:data.email,password:data.password});
    const modifedResult={
        _id:result._id,
        name:result.name,
        email:result.email,
        phone:result.phone,
        role:result.role,
        address:result.address,
        createdAt:result.createdAt,
        updatedAt:result.updatedAt
    }
    return modifedResult;
}