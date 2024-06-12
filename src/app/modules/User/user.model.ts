import {Schema, model} from 'mongoose';
import { User } from './user.interface';

const UserSchema = new Schema<User>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
},
{
    timestamps:true
}
);

const UserModel = model<User>('User', UserSchema);
export default UserModel;