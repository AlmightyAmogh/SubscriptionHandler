import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema({
    name : {
        type : String, 
        required : [true , 'User Name is required'],
        trim : true,
        minLength: 2,
        maxLength : 50,
    },
    email : {
        type : String, 
        required : [true , 'Email is required'],
        unique: true,
        trim : true,
        lowercase:true,
        match : [/\S+@\S+\.\S+/,"Please fill valid Email"],
    },
    password: {
        type : String, 
        required : [true , 'Password is required'],
        minLength: 4,
    }
},{timestamps:true});

const User = mongoose.model('User',userSchema);
export default User;