import express from "express";

const app = express();

app.get("/", (req, resp) => {
    resp.send("Backend rodando");
})

app.listen(3000, () => {
    console.log("serving run pot: 3000");    
})