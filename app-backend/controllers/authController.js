const User = require('../models/User')

const add = async (req,res)=>{
    try {
        const {name,email,password} = req.body
        const check = await User.findOne({ where:{email}})
        if (check){
            return res.json({message:"User already exists"})

        }

        await User.create ({name,email,password})
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        console.error("Error in add controller:", error); // 👈 log actual error
        res.status(500).json({ message: "Something went wrong" });
    }
}

module.exports = {
    add
}