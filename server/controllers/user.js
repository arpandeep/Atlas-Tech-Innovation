import User from "../models/User.js"
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import tryCatch from "./utils/tryCatch.js"


export const register=  tryCatch( async(req, res)=>{
    
        const{name, email, password}= req.body
        if(password.length<6) return res.status(400).json({success:false, message:'password must be6 characters or more'})
        const emailLowerCase= email.toLowerCase()
        const existedUser = await User.findOne({email:emailLowerCase})
        if(existedUser) return res.status(400).json({success:false, message:'user already exists'})
        const hashedPassword= await bcrypt.hash(password,12)
        const user= await User.create({
            name,
            email:emailLowerCase,
            password: hashedPassword 
        })
        const {_id:id, photoURL}=user
        const token = jwt.sign({id,name, photoURL},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(201).json({success:true, result:{id, name, email, photoURL, token}})
    
})


export const login = tryCatch(async(req, res)=>{
    const{email, password}= req.body
        const emailLowerCase= email.toLowerCase()
        const existedUser = await User.findOne({email:emailLowerCase})
        if(!existedUser)
             return res.status(404).json({success:false, message:'user doesnt exists'})
        const correctPassword= await bcrypt.compare(password,existedUser.password)
        if(!correctPassword) return res.status(400).json({success:false,message:'invalid credentials'})
        
        const {_id:id,name, photoURL}=existedUser;
        const token = jwt.sign({id,name, photoURL},process.env.JWT_SECRET,{expiresIn:'1h'})
        res.status(200).json({success:true, result:{id, name, email:emailLowerCase, photoURL, token}})
})