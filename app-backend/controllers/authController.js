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
        console.error("Error in add controller:", error); 
        res.status(500).json({ message: "Something went wrong" });
    }
}

const login = async(req,res)=>{
    try {
        const {email,password} = req.body
        const user = await User.findOne({where:{email}})
        if (!user){
            return res.status(404).json({message:"User Not Found"})
        }
        if (user.password !== password){
            return res.status(401).json({message:"password Error "})
        }
        res.json({message: "Login successful"})
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error logging in" });
    }
}

module.exports = {
    add,
    login

}