import express from "express";
const app = express();
const port = process.env.PORT || 3010;

app.listen(port, () => console.log("Working"));