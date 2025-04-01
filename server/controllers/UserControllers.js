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
const login = async (req, res) => {
    try {
        const {email, password} = req.body;
        const user = await UserModel.findOne({email});
        const passOk = bcrypt.compareSync(password, user.password);
        if (passOk && user) {
            const token = jwt.sign({id: user._id, username: user.username}, process.env.SECRET_KEY);
            if (token) {
                res.cookie("user_token", token, {
                    httpOnly: true, // document.cookie can't read it
                    secure: true, // cookie send via https only
                    sameSite: "Strict", // For CSRF attack
                    maxAge: 3600000
                }).json("ok");
            }
        } else {
            res.status(400).send(user);
        }
    } catch (error) {
        res.status(400).send({error: error});
    }
}



export {register, login};
