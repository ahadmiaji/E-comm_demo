const app = require ("./app"); 
const config = require ("./config/config"); 
require("./config/db");

const PORT = config.app.port;
// const mongoose = require("mongoose");


app.listen(PORT,()=>{
    console.log(`app is running on http://localhost:${PORT}`);
});