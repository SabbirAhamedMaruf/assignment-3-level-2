import {Schema, model} from 'mongoose';
import { Slot } from './slot.interface';


const SlotScheama = new Schema<Slot>({
    service: {
        type: Schema.Types.ObjectId, 
        required: true,
    },
    date: {
        type: String,
        required: true
    },
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    },
    isBooked: {
        type: String,
        required: true,
        enum: ["available","booked","canceled"]
    }
},
{
    timestamps:true
}
);

const SlotModel = model<Slot>('Slot', SlotScheama);
export default SlotModel;