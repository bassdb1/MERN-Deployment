// Tell it we are going to use Mongoose
const mongoose = require("mongoose")

// Make a schema

const PetSchema = new mongoose.Schema({

// Using Validation!
    name:{
        type: String,
        required:[true, "Name is required!"],
        minLength: [3, "Name must be at least 3 chars"],
        maxLength: [100, "We do not need this much"]
    },
    
// Using Validation!
    
    type:{
        type: String,
        required:[true, "Type is required!"],
        minLength: [3, "Type must be at least 3 chars"],
        maxLength: [100, "We do not need this much"]
    },

    description:{
        type: String,
        required:[true, "Description is required!"],
        minLength: [3, "Description must be at least 3 chars"],
        maxLength: [100, "We do not need this much"]
    },

    petPic:{
        type: String,
        required:[true, "Picture is required"]
    },

    skill1:{
        type: String,
    },
       

    skill2:{
        type: String,
        
    },

    skill3:{
        type: String,
        
    }
    

   
}, {timestamps:true})

// Registed this DB as a Table here
const Pet = mongoose.model("Pet", PetSchema );

// we need other files to ne able to talk to this file
module.exports = Pet;
