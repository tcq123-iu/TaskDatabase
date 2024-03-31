import express from "express"
import mysql from "mysql2"
import cors from "cors"
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import cookieParser from "cookie-parser";

const salt = 10;

// const express = require ('express');
// const mysql = require ('mysql2');
// const cors = require ('cors');

const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"task"
})

// db.connect();
// db.query('SELECT * FROM Example', function (error, results, field) {
//     if (error) throw error;
//     console.log(results)
// })

app.get("/", (req,res)=> {
    return res.json("hello this is backend");
})

app.listen(8800, ()=> {
    console.log("Connected to backend");
})

// app.post('/signup', (req, res) => {
//     const sql = "INSERT INTO Users ('name', 'email', 'password') VALUES (?)";
//     const values =[
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
// })