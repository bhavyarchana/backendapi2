// importing
const express=require('express')
require("./connection")
var empModel = require("./model/employee")

// initialize
var app = express();

// midd
app.use (express.json());

// api creation
app.post('/add',async(req,res)=>{
    try {
         await empModel(req.body).save()
         res.send("data added")
    } catch (error) {
        console.log(error);
        
    }
})
app.get('/view',async(req,res)=>{
    try {
        empee = await empModel.find()
        res.send(empee);
    } catch (error) {
        console.log(error);
        
    }
})

app.delete('/remove/:id',async(req,res)=>{
    try {
        await empModel.findByIdAndDelete(req.params.id)
        res.send("data Delete");
    } catch (error) {
        console.log(error);
    }
})

app.put('/edit/:id',async(req,res)=>{
    try {
        await empModel.findByIdAndUpdate(req.params.id,req.body)
        res.send("update successfully");
    } catch (error) {
        console.log(error);
    }
})

// port setting
app.listen(3004,()=>{
    console.log("port is Running");
});