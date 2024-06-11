import { Types } from "mongoose"

export type Slot={
    service:Types.ObjectId,
    date:Date,
    startTime:Date,
    endTime:Date
    isBooked:boolean,
}