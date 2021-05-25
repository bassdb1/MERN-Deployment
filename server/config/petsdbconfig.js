// Import Mongoose
const mongoose = require('mongoose');
// DB Name
const db_name = "pets_db"      // Change this name for the project

// connect Mongoose to our DB, using 'db_name' variable, using string interpolation below, with backticks
mongoose.connect(`mongodb://localhost/${db_name}`, {   // route for DB server
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));