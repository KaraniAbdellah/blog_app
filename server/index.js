// Start Make REST API
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import BlogRoute from "./routes/BlogRoute.js";
import UserRoute from "./routes/UserRoute.js";
import cookieParser from "cookie-parser";


// Create REST API
const rest_api = express();
rest_api.use(express.json({ limit: '10mb' }));
rest_api.use(cors({credentials: true, origin: true}));
rest_api.use(express.json());
rest_api.use(cookieParser());
rest_api.use("/blog", BlogRoute);
rest_api.use("/user", UserRoute);
// rest_api.use("/saved", UserRoute);
// rest_api.use("/listePosts", UserRoute);




// Connect To DataBase
mongoose.connect(process.env.DB_URL).then(() => {
    console.log("✅ Connect Succefully to Database");
}).catch(() => {
    console.log("❌ Can not Connect Succefully to Database");
});


// Make REST API Active
rest_api.listen((process.env.PORT), () => {
    console.log(`✅ Server Is Listening to PORT ${process.env.PORT}`);
});


