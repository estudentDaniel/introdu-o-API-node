const mongoose =  require('mongoose');
const express = require('express')
//conexão
mongoose.connect('mongodb://localhost:27017/tsi',{
    useNewUrlParser: true, useUnifiedTopology:true
}).then(()=>{
    console.log("mongo conectado")
}).catch(err =>{
    console.log('mensage de erro'+err)
})

module.exports = mongoose