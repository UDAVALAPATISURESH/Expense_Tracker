const express = require('express')
const db = require('./config/db')
const Router = require('./routes/authRoutes')
const productRoutes = require("./routes/productRoutes");

const cors = require("cors");

const app = express()
app.use(cors());
app.use(express.json()); 
app.use('/app',Router)
app.use("/products", productRoutes);
db.sync({force:false}).then(()=>{
    app.listen(3000,(err)=>{
        console.log("server running")
    })
}).catch((err)=>{
    console.log(err)
})