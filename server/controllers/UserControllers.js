import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc Register new user
// @route Register POST /user/Register
// @access Public
const register = async (req, res) => {
    const {username, email, password} = req.body;
    if (!username && !email && !password) {
        res.status(400).send({message: "All inputs required"});
    }

    try {
        const isUserExit = await UserModel.findOne({email: email});
        if (isUserExit) {
            return res.status(200).json({message: "User Already Exit"});
        }
        const user = await UserModel.create({
            username,
            email,
            password: bcrypt.hashSync(password, bcrypt.genSaltSync(10))
        });
        if (user) {
            return res.status(200).json(user);
        }
        return res.status(400).send({ message: "Failed Saving User Data" });
    } catch (error) {
        res.status(400).send({error: error});
    }
}


// @desc Register new user
// @route Register POST /user/Register
// @access Public
const login = (req, res) => {
    console.log(req.body);
}



export {register, login};
