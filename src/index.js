import express from "express";
import routerClient from "./routes/users.routes.js";
const app = express();
const port = process.env.PORT || 3010;

app.use(express.json());
app.use('/api', routerClient);

app.listen(port, () => console.log("Working " + port));

// app.get('/users',(req,res)=>{
//     res.send("Get From USERS");
// });