const mongoose=require('mongoose');


const hero = new mongoose.Schema({
    id: String,
    name: String
    
})

module.exports = Hero = mongoose.model('Hero', hero)