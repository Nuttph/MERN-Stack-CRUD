const Product = require('../models/Product')


exports.read = async(req,res) =>{
    try{
        const id = req.params.id
        const producted = await Product.findOne({_id:id}).exec()
        res.send(producted)

    }catch(error){
        console.log(error);
    }
}

exports.list = async(req,res)=>{
    try{
        //code
        const producted = await Product.find({}).exec();
        res.send(producted)
    }
    catch(err){
        console.log(`erorr is a ${err}`);
        res.status(500).send('Server Error')
    }
}

exports.create = async(req,res)=>{
    try{
        //code
        console.log(req.body)
        const producted = await Product(req.body).save()
        res.send(producted)
        // res.send('Hello Create')
    }
    catch(err){
        console.log(`erorr is a ${err}`);
        res.status(500).send('Server Error')
    }
}

exports.update = async(req,res)=>{
    try{
        //code
        const id = req.params.id
        const updated = await Product.findOneAndUpdate({_id:id},req.body,{new: true}).exec()
        res.send(updated)
    }
    catch(err){
        console.log(`erorr is a ${err}`);
        res.status(500).send('Server Error')
    }
}

exports.remove = async(req,res)=>{
    try{
        //code
        const id = req.params.id
        const removeID = await Product.findOneAndDelete({_id:id}).exec()
        res.send(removeID)
    }
    catch(err){
        console.log(`erorr is a ${err}`);
        res.status(500).send('Server Error')
    }
}