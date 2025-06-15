import mongoose from "mongoose"
import bcrypt from "bcrypt"

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, "username must be atleast of 3 characters"],
        maxlength: [20, "username not be greater than 20 characters"]
    },
    email:{
        type: String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"Password must be at least 6 characters long"]
    },
    role:{
        type:String,
        enum:["user","admin"],
        default :"user"
    },
    cartItem :[{
        car:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"CarCart"
        }
    }]
},
    {timestamps : true}
)

userSchema.pre("save",async function (next){
    if(!this.isModified("password")) return next();
    try {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password,salt);
        next();
    } catch (error) {
        next(error)
    }
})

userSchema.methods.comparePassword = async function(candidatePassword){
    return await bcrypt.compare(candidatePassword, this.password)
}

const User = mongoose.model ("user",userSchema);
export default User;