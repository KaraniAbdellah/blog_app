import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// @desc Register new user
// @route POST /user/register
// @access Public
const register = async (req, res) => {
  const { username, email, password, userImage } = req.body;
  if (!username && !email && !password && !userImage) {
    res.status(400).send({ message: "All inputs required" });
  }

  try {
    const isUserExit = await UserModel.findOne({ email: email });
    if (isUserExit) {
      return res.status(200).json({ message: "User Already Exit" });
    }
    const user = await UserModel.create({
      username,
      email,
      password: bcrypt.hashSync(password, bcrypt.genSaltSync(10)),
      userImage: userImage,
    });
    if (user) {
      return res.status(200).json(user);
    }
    return res.status(400).send({ message: "Failed Saving User Data" });
  } catch (error) {
    res.status(400).send({ error: error });
  }
};


const cookieOptions = {
  secure: true,
  // we are in dev mode --> we do not have https in localhost
  httpOnly: true,
  sameSite: "none",
  maxAge: 24 * 60 * 60 * 1000, // expires in 24hr
};
// if (process.env.NODE_ENV == "production") cookieOptions.secure = true;

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const passOk = bcrypt.compareSync(password, user.password);
    console.log(passOk);
    if (passOk && user) {
      const token = jwt.sign(
        { id: user._id, username: user.username },
        process.env.SECRET_KEY
      );
      if (token) {
        console.log(user);

        return res.cookie("user_token", token, cookieOptions).json({
          id: user._id,
          username: user.username,
        });
      }
    } else {
      return res.status(400).send(user);
    }
  } catch (error) {
    return res.status(400).send({ error: error });
  }
};

// @desc Profile Send User Profile
// @route  GEt /user/profile
// @access Private
const profile = async (req, res) => {
  const token = req.cookies.user_token;
  try {
    if (token) {
      const {id, username, iat } = jwt.verify(token, process.env.SECRET_KEY);
      const user = await UserModel.findById(id);    
  
      if (id && username && iat && user) {
        res.status(200).send({
          id, username, iat, userImage: user.userImage,
        });
      } else {
        res.status(404).send({ message: "Invalid Profile" });
      }
    } else {
      res.status(404).send({ message: "Invalid Profile" });
    }
  } catch (error) {
    res.status(404).send({ message: error });
  }
};

const logout = (req, res) => {
  res.cookie("user_token", "", cookieOptions);
  res.json({ message: "ok" });
};

export { register, login, profile, logout };
