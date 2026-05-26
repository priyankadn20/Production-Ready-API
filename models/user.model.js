import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        require:[true,'User Name is requires'],
        trim: true,
        minLength: 2,
        maxLength:255,
    },
    email:{
        type:String,
        require:[true,'User Email is requires'],
        unique:true,
        trim: true,
        lowercase:true,
        match:[/\S+@\S+\.\S+/,'please fill a valid email address'],
    },
    password:{
        type:String,
        require:[true,'User password is requires'],
        minLength:6,
        maxLength:255,
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
export default User;
