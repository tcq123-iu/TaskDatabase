import express from "express"
import mysql from "mysql2"

const app = express()

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"12345",
    database:"task"
})

db.connect();
db.query('SELECT * FROM Example', function (error, results, field) {
    if (error) throw error;
    console.log(results)
})

app.get("/", (req,res)=> {
    res.json("hello this is backend")
})



app.listen(8800, ()=> {
    console.log("Connected to backend")
})