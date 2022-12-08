const express = require("express");
const cors = require("cors");

const userRouter =require("./routes/user.route");
const app = express();


//middleware
app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use("/api/users", userRouter);

// api/users : GET
// api/users/:id : GET
// api/users/ : POST
// api/users/:id : PATCH
// api/users/:id : DELETE

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/./views/index.html");
}); 

app.use((req,res,next)=>{
    res.status(404).json({
        message : "route not found",
    });
}); 


//server error handling
app.use((err,req,res,next)=>{
    res.status(500).json({
        message : "somting is broke",
    });
}); 
module.exports = app;