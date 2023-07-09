import User from "../models/user.js"




export const login = async(req,res)=>{
    try {

        const {username, email,password} = req.body

        if(!username) return res.json("name is required")
        
        
        if(!password || password < 6) return res.json("password is required and but have more than 6 letter")
    
        const checkEmail = await User.findOne({email})

        if(email) return res.json("Email already exist")


        const user = await User.create({
            username,password,email
        })

        return res.json(user)

    } catch (error) {
        console.log(error)
        
    }
    
}