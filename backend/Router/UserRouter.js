import express from "express";
import { allUsers,deleteUser } from "../Controller/UserController.js";
const userRouter = express.Router();

userRouter.get('/allUser',allUsers);
userRouter.delete('/deleteUser/:id',deleteUser);
export default userRouter;