const express = require('express')
const mongoose = require('mongoose')


const app = express();
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());






//MongoDB Connection

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> console.log('Database Connected'))
.catch((err)=>console.log(err));


//Require routes
const Home = require('./routes/apis/Home')
const Hero = require('./routes/apis/Heros')
const Middleware = require('./Middleware/Middleware')

//Routes
app.use('/home',Middleware, Home);
app.use('/hero', Hero);





app.listen(5000, () => { console.log('Server started at port: 5000'); })