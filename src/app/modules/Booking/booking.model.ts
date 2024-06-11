import {Schema, model} from 'mongoose';
import { Booking } from './booking.interface';
import { VehicleTypesData } from './booking.constants';


const BookingSchema = new Schema<Booking>(
    {
        customer: {
            type: String, // TODO : reference of the specific user
            required: true
        },
        service: {
            type: String, // TODO : reference of the specific service
            required: true
        },
        slot: {
            type: String, // TODO : reference of the specific slot
            required: true
        },
        vehicleType: {
            type: String,
            required: true,
            enum: VehicleTypesData,
        },
        vehicleBrand: {
            type: String,
            required: true
        },  
        vehicleModel: {
            type: String,
            required: true
        },
        manufacturingYear: {
            type: Number,
            required: true
        },
        registrationPlate: {
            type: String,
            required: true
        }
    }
)

const BookingModel = model<Booking>('User', BookingSchema);
export default BookingModel;