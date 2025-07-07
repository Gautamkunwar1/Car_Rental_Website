import mongoose from "mongoose";
const BookingSchema = mongoose.Schema({
    userName:{
        type:String,
        required:true,
    },
    phoneNo:{
        type:Number,
        required:true,
    },
    passenger:{
        type:Number,
        required:true,
    },
    vehicleName:{
        type:String,
        required:true,
    },
    pickupDate:{
        type:Date,
        required:true,
    },
    days:{
        type:Number,
        required:true
    },
    dl:{
        type:String,
    }
},{timestamps : true},);
const Booking = mongoose.model("booking",BookingSchema);
export default Booking;