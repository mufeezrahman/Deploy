import 'dotenv/config';
import express from "express";

const app=express();
const port=3000;

app.get('/',(req,res)=>{
    res.send("Hello world!");
});

app.get('/login',(req,res)=>{
    res.send("<h1>Login successful!</h1>");
})

app.listen(process.env.PORT,()=>{
    console.log(`Listening at port :${port}`);
});
