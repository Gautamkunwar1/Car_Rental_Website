import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDb from "../Db/db.js";
import userRouter from "../Router/AuthRouter.js";

dotenv.config()
const app = express();
const port = process.env.PORT || 5001;
app.use(express.json());

app.use(cors());
app.use("/api/auth",userRouter);


app.listen(port,async()=>{
    try {
        console.log(`Server is running at ${port}`)
        await connectDb();
    } catch (error) {
        console.error(`Error :${error.message}`)
    }
})