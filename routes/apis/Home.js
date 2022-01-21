const express = require('express')
const router = express.Router();

const axios = require('axios')
router.get('/', (req, res) => {


    // TODO:
    // res.send("Hello server!")

    // TODO:
    // res.send("<h1>Hello Server!</h1>")

    // TODO:
    // res.send("<img src='https://dschits.in/assets/dsc.png' alt='Logo' />")


    TODO:
    axios.get('https://afternoon-temple-69504.herokuapp.com/')
        .then((response) => {
            res.send(response.data);
        })
})

router.post('/', (req, res) => {
    //Accepting{message: message}
    
    console.log(req.body.message);
    res.send(req.body.message);
})
module.exports = router;