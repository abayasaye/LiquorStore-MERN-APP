const dotenv = require("dotenv")
dotenv.config()
const express = require("express");
const mongoose = require("mongoose")
const port =3000;
app = express();
const cors = require("cors");

require("./DB/")
const passport = require("passport");
require("./config/passport")(passport)
const productsRouter= require('./routes/products-route');
const userRouter = require("./routes/user-route");

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(passport.initialize())

app.use('/products',productsRouter)
app.use('/users',userRouter)

app.get("/" , (req,res)=>{
    res.send({message:"success"})
})

app.listen(port,()=>{
    console.log(process.env.CONNECTION_STRING);
    console.log(`working on port : ${port}`);
})








