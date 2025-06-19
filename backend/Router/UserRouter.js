import express from "express";
import { allUsers } from "../Controller/UserController.js";
const userRouter = express.Router();

userRouter.get('/allUser',allUsers);
export default userRouter;