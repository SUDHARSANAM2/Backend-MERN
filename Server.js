const express = require("express");
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const taskRoute = require("./Routes/TaskRoute.js")



// MiddleWare
app.use((req,res,next)=>{
    console.log("Path : "+ req.path + " Method : "+req.method);
    next();
    
})

app.use(express.json());

mongoose.connect(process.env.MONGODB_URL)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("DB is Connected Successfully and Listening on port "+process.env.PORT);
    }) 
} 
)
.catch((err)=>{
    console.log("error :"+err);
    
})
 
app.use('/api/task',taskRoute);
