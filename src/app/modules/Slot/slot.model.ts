import {Schema, model} from 'mongoose';
import { Slot } from './slot.interface';


const SlotScheama = new Schema<Slot>({
    service: {
        type: String, //TODO: reference of the specific service
        required: true
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
        type: Boolean,
        required: true
    }
});

const SlotModel = model<Slot>('User', SlotScheama);
export default SlotModel;