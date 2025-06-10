import express from "express";

const app = express();

app.get("/", (req, resp) => {
    resp.send("Backend rodando");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("serving run port: 3000");    
})