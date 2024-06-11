import {Schema, model} from 'mongoose';
import { Booking } from './booking.interface';
import { VehicleTypesData } from './booking.constants';


const BookingSchema = new Schema<Booking>(
    {
        customer: {
            type: Schema.Types.ObjectId, 
            required: true
        },
        service: {
            type: Schema.Types.ObjectId,
            required: true
        },
        slot: {
            type: Schema.Types.ObjectId, 
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