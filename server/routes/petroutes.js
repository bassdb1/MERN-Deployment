// Make our routes

const PetController = require("../controllers/petcontroller");

// Routes
module.exports = app =>{                                          // app is a parameter
    app.get("/api/pets", PetController.findAllPets)              // going to 'petcontroller file, running the 'findAllPets' Method
    app.post("/api/pets/create", PetController.createPet)
    app.get("/api/pets/:id", PetController.findOnePet)
    app.put("/api/pets/update/:id", PetController.updateOnePet)
    app.delete("/api/pets/delete/:id", PetController.deletePet)

}
