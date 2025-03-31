import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc Register new user
// @route Register POST /user/Register
// @access Public

const register = (req, res) => {
    console.log(req.body);
}



export {register};
