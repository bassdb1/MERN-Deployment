const Pet = require('../models/petsmodel');

// functions for each of our CRUD commands

module.exports.findAllPets = (req, res)=>{
    Pet.find().sort({type:1})                     // Talking to the DB 'Pet' using the 'method' 'find'
        .then(allpets =>{                        // 'allpets' is the variable that holds all it found
            res.json({results: allpets})         //  respond in json, using variable 'allpets'
        })
        .catch(err=>{                             // any errors
            res.json(err.errors)
        })
}

// Create a Pet
module.exports.createPet = (req, res)=>{

    console.log("REQUEST.BODY LOOKS LIKE THIS--->", req.body)
    Pet.create(req.body)     // 'create is a Mongoose cmd, that takes in the 'request body' of what was given in Postman 
        .then(newPet=>{      // This is the variable that stores the pet from Postman  
            res.json({results: newPet})
        })
        .catch(err=>{
            console.log(err.errors)
            res.json(err.errors)
        })
}

// Find one pet
module.exports.findOnePet = (req, res)=>{
    Pet.findOne({_id: req.params.id })
        .then(onePet=>{
            res.json({results: onePet})
        })
        .catch(err=>res.json(err.errors))
}

// Update One Pet
module.exports.updateOnePet = (req, res)=>{
    Pet.findOneAndUpdate(
        {_id: req.params.id},
        req.body,
        { new: true, runValidators: true }
        )
        .then(updatedPet =>{
            res.json({results: updatedPet})
        })
        .catch(err=> res.json(err))
}

// Delete Pet

module.exports.deletePet = (req,res)=>{
    Pet.deleteOne({_id: req.params.id})
        .then(deletedPet =>{
            res.json({results: deletedPet})
        })
        .catch(err=> res.json(err.errors))
}
