const express = require('express') ;
const cors = require('cors') ;
const mongoose = require('mongoose') ;
const dotenv = require('dotenv') ;

const router = require('./routes/route')
dotenv.config();
const app=express();
app.use(express.json({limit:'10mb'}))
const PORT= process.env.PORT;

app.use(cors())
app.use("/",router)
mongoose.connect(process.env.DB_URL,{
}).then(console.log(`Connected to Database:)`)).catch((err)=> console.log(`Not Connected ${err}`));

app.listen(PORT,()=>{
    console.log(`Localhost Running on ${PORT}`);
})