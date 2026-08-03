import express from "express";
import mongoose from "mongoose";


const app=express();

app.use(express.json());

app.get("/",(req,res)=>{

    const body={
        name:req.body,
        password:req.password
    }

    const find=
})