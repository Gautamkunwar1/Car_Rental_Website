import express from "express";
import upload from "../utils/upload.js";
import { addCar,allCars } from "../Controller/CarController.js";

const carRouter = express.Router();
carRouter.post('/addCar',upload.fields([
    { name: 'image', maxCount: 1 },
]),addCar);
carRouter.get('/allCars',allCars);

export default carRouter;