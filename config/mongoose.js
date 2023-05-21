const mongoose=require('mongoose');
require('dotenv').config();
const connectWithDB=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB connection is Successful"))
    .catch((error)=>{
        console.log("Error in creating DB connection in mongoose.js file");
        console.error(error);
        process.exit(1);
    })
};
module.exports=connectWithDB;