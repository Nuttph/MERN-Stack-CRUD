const mongoose = require('mongoose')
const connectDB = async() =>{
    try{
        //coding db
        await mongoose.connect('mongodb://localhost:27017/nuttaphonDB')//เข้าถึง Database
        console.log('DB Connected');
    }catch(error){
        console.log(`error is ->`,error);
    }
}
module.exports = connectDB