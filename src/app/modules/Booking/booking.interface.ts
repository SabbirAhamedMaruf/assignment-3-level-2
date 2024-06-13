import { Types } from "mongoose";

export type VehicleTypes = "car"|"truck"|"SUV"|"van"|"motorcycle"|"bus"|"electricVehicle"|"hybridVehicle"|"bicycle"|"tractor";

export type Booking={
    customer:Types.ObjectId,
    service:Types.ObjectId,
    slot:Types.ObjectId,
    vehicleType:VehicleTypes,
    vehicleBrand:string,
    vehicleModel:string,
    manufacturingYear:number,
    registrationPlate:string,
}