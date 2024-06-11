import {Schema, model} from 'mongoose';
import { Slot } from './slot.interface';


const SlotScheama = new Schema<Slot>({
    service: {
        type: Schema.Types.ObjectId, 
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    startTime: {
        type: Date,
        required: true
    },
    endTime: {
        type: Date,
        required: true
    },
    isBooked: {
        type: Boolean,
        required: true
    }
});

const SlotModel = model<Slot>('User', SlotScheama);
export default SlotModel;