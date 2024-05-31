const mongoose = require('mongoose')

require("dotenv").config()

const dbConnect = () => {
    mongoose.connect('mongodb+srv://shreekantkerkar85:gpwos8HZFUTWCY45@e-learning-db.fmcer8w.mongodb.net/eLearningDB?retryWrites=true&w=majority&appName=e-learning-db'
        // useNewUrlParser:true,
        // useUnifiedTopology:true
    )
    .then(() => console.log("db connection successfull"))
    .catch((error) => {
        console.log("db connection failed");
        console.error(error);
        process.exit(1);
    })
}

module.exports = dbConnect;