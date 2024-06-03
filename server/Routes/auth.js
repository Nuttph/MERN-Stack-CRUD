const express = require('express')

const router = express.Router() //ใช้ express router

router.get('/auth',(req,res)=>{
    res.send('Hello Auth enpoint')
})



module.exports = router //เราจะ export router ไปให้ไฟล์อื่นใช้