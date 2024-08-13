import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const register = async (req,res) => {
    try {
        const {fullname, email, phoneNumber,password, role} = req.body;
        if(fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                sucess:false
            });
        };
        const user = await User.findOne({email});
        if(user){
            return res.status(400).json({
                message:'User already exist with this email.',
                sucess:false,
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        await User.create({
            fullname,
            email,
            phoneNumber,
            password:hashedPassword,
            role,
        })
    } catch (error) {

    }
}
export const login = async (req,res) => {
    try {
        const {email, passward, role} =req.body;
        if(fullname || !email || !phoneNumber || !password || !role){
            return res.status(400).json({
                message:"Something is missing",
                sucess:false
            });
        };    
    } catch (error) {

    }
}