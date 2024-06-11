export type VehicleTypes = "car"|"truck"|"SUV"|"van"|"motorcycle"|"bus"|"electricVehicle"|"hybridVehicle"|"bicycle"|"tractor";

export type Booking={
    customer:string //TODO : made this reference
    service:string,
    slot:string,//TODO : made this reference
    vehicleType:VehicleTypes,
    vehicleBrand:string,
    vehicleModel:string,
    manufacturingYear:number,
    registrationPlate:string,
}