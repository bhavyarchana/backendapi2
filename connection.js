const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://bhavya:archana2006@bhavya.aw3qr.mongodb.net/?retryWrites=true&w=majority&appName=Bhavya')
.then(()=>{
    console.log("connected")
})
.catch((err)=>{
    console.log(err)
})