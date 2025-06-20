import CarDetail from "../model/carSchema.js";
import { sendResponse } from "../utils/response.util.js";

export const addCar = async (req, res) => {
    const { name, carNo, desc, rent, seats } = req.body;
    const imageFile = req.files?.image?.[0];

    const carNoRegex = /^[A-Z]{2}[0-9]{2}[A-Z]{2}[0-9]{4}$/;

    if (!name || !carNo || !desc || !rent || !seats || !imageFile)
        return sendResponse(res, 400, false, "All fields including image are required");

    if (name.length < 4)
        return sendResponse(res, 400, false, "Name should be at least 4 characters");

    if (!carNoRegex.test(carNo))
        return sendResponse(res, 400, false, "Provide a valid car number");

    if (carNo.length !== 10)
        return sendResponse(res, 400, false, "Car number should be exactly 10 characters");

    try {
        const existingCar = await CarDetail.findOne({ carNo });
        if (existingCar)
            return sendResponse(res, 400, false, "Car number already exists");

        const newCar = await CarDetail.create({
            name,
            carNo,
            desc,
            rent,
            seats,
            image: `/upload/${imageFile.filename}`,
        });

        return sendResponse(res, 201, true, "New Car added successfully", newCar);
    } catch (error) {
        console.error(`Error in addCar Controller: ${error.message}`);
        return sendResponse(res, 500, false, "Internal Server Error");
    }
};


export const allCars = async(req,res) =>{
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 5;
        const totalCars = await CarDetail.countDocuments();

        const cars = await CarDetail.find().skip((page-1)*limit).limit(limit)
        return sendResponse(res,200,true,"data found successfully",{
            cars,totalCars,
            totalPages:Math.ceil(totalCars/limit),
            currentPage:page
        })
    } catch (error) {
        console.error("Error in allCars:",error.message);
        return sendResponse(res,500,false,"Internal Server Error")
    }
}