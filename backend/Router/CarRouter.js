import express from "express";
import upload from "../utils/upload.js";
import { addCar,allCars,deleteCar,editCar } from "../Controller/CarController.js";

const carRouter = express.Router();
carRouter.post('/addCar',upload.fields([
    { name: 'image', maxCount: 1 },
]),addCar);

carRouter.get('/allCars',allCars);
carRouter.put('/editCar/:id',editCar);
carRouter.delete('/deleteCar/:id',deleteCar);

export default carRouter;