const express=require('express');
const router=express.Router();

const mongoose=require('mongoose')

const Hero = require('../../Models/HerosSchema')

router.post('/', (req, res)=>{
//    Accepting{ id, name} 
    const hero = new Hero({
        id: req.body.id,

        name: req.body.name
    })
    hero.save().then(()=>res.status(200).json(hero));
})


router.get('/', (req, res)=>{
    Hero.find()
    .then( user=> res.status(200).json(user))
    .catch(err=> console.log(err))
})


router.get('/userid/:id', (req, res)=>{

    //    localhost:5000/user/1, localhost:5000/user/2
    Hero.findOne({id: req.params.id})
    .then( user=> res.status(200).json(user))
    .catch(err=> console.log(err));
})


router.put('/update/:id', (req, res)=>{
    // Accepting {name: name}

    //    locahost:5000/update/1, locahost:5000/update/2

    Hero.findOneAndUpdate(
        {id: req.params.id},
        {name: req.body.name}
    )
    .then( user => res.status(200).json(user))
    .catch( err => console.log(err));
})



router.delete('/delete/:id', (req, res)=>{
    Hero.findOneAndDelete({id: req.params.id})

    .then( user => res.status(200).json(user))
    .catch( err => console.log(err));
})


module.exports = router;