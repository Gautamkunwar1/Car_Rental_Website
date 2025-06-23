import express from "express";
import { addMsg,getAllMsg,deleteMsg } from "../Controller/MsgController.js";

const msgRouter = express.Router();
msgRouter.post('/addMsg',addMsg);
msgRouter.get('/getAllMsg',getAllMsg)
msgRouter.delete('/deleteMsg/:id',deleteMsg)

export default msgRouter;