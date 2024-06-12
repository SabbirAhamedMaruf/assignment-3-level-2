import {Schema, model} from 'mongoose';
import { Service } from './service.interface';


const ServiceSchema = new Schema<Service>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        required: true
    }
},
{
    timestamps:true
});

const ServiceModel = model<Service>('Service', ServiceSchema);
export default ServiceModel;