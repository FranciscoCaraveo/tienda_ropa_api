import express from "express";
const app = express();
const port = process.env.PORT || 3010;


app.get('/users',(req,res)=>{
    res.send("adios")
});

app.listen(port, () => console.log("Working"));