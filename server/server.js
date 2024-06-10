//setup
//npm init -y
//npm i express
//npm i nodemon

const express = require('express') //ประกาศตัวแปรเก็บ express.js

const morgan = require('morgan')
const cors = require('cors')
const bodyParse = require('body-parser')

const connectDB = require('./Config/db')



const { readdirSync } = require('fs') // เพื่อ auto import

// route 2
// const productRouters = require('./Routes/product')
// const authRounters = require('./Routes/auth')


const app = express(); //เก็บ function express ไว้ใน app

connectDB()

app.use(morgan('dev'))
app.use(cors())
app.use(bodyParse.json({limit:'10mb'})) // ยังไม่เห็นภาพ
//Route เส้นทาง endpoint

//Route 1
// app.post('/product',(req,res)=>{ //get put post delete
//     res.send('Hello Endpoint Nuttaphon')
// }) //part,function -> request and response

// Route 2
// app.use('/api',productRouters)
// app.use('/api',authRounters)

// Route 3 Auto
readdirSync('./Routes').map((r)=>{
    app.use('/api',require('./Routes/'+r)) //ต่อ string
})

app.listen(5000,()=>console.log("Sercer เปิดแล้ว -> http://localhost:5000")); // listen(port,callback function)
