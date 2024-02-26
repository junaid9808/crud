import mongoose from "mongoose";
const schema = new mongoose.Schema({
    email:{
        type: String,
        require: true
        
    },
    firstName:{
        type: String,
        require:true
        
    },
    lastName:{
        type: String,
        require:true
        
    },
    password:{
        type: String,
        require:true
    }
});

const user = new mongoose.model('user',schema);
export default user;