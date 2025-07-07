import express from "express";
import uploadDl from "../utils/uploadDl.js";
import { addBooking, showBooking } from "../Controller/BookingController.js";
const BookingRouter = express.Router();
BookingRouter.post('/addBooking',
    uploadDl.fields([{ name: "dl", maxCount: 1 }]),
    addBooking
);

BookingRouter.get('/showBooking', showBooking);

export default BookingRouter;