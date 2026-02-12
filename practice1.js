//Setting route to be accessed by users to send data with post requests.

import express from "express";
const app = express();
app.use(express.json());
const port=process.env.PORT || 5000;

app.get('/',(req,res)=>{
res.send('Hello! This is the GET route. Send a POST request to see the name response.');
})

app.post('/',(req,res)=>{
const {name,email}=req.body;
res.status(200);
res.send(`Hello ${name}`);

})
app.listen(port,(error)=>{

    if(!error){
        console.log("Server running successfully and http://localhost:",port);
    }
    else{
        console.log("Server running failed",error);
    }
})