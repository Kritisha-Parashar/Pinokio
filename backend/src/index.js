import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import cors from 'cors'

import path from 'path';

import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(express.json());
app.use(cookieParser());
app.use(cors({
   origin: "http://127.0.0.1:5173",
   credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/message", messageRoutes);


app.listen(PORT, ()=> {
    console.log("serving is running on PORT:"+PORT);
    connectDB();
});
