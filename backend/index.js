import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import userRoutes from "./routes/userRoute.js";
import authRoutes from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import path from "path"

dotenv.config();

const __dirname = path.resolve();

const app = express();

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'frontend','dist','index.html'))
})

app.use(express.json());

app.use(cookieParser())

app.use("/api/user", userRoutes)

app.use("/api/auth", authRoutes)

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'internal server errror';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode
    })
})

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("connected to the database"))
.catch((err) => console.log(`connection not established:${err}`))

app.listen(3000, () => {
    console.log('server running on port 3000');
})