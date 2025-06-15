import mongoose from "mongoose";
const carCartSchema = mongoose.Schema({
    carName:{
        type:String,
        required: true
    },
    carImage:{
        type : String,
        required: true,
    },
    pickupDate:{
        type:Date,
        required:true
    },
    dropOutDate:{
        type:Date,
        required:true
    },
    amount:{
        type:Number,
        required:true
    }
})

const CarCart = mongoose.model ("CarCart",carCartSchema)
export default CarCart;