import Booking from "../model/bookingSchema.js";
import { sendResponse } from "../utils/response.util.js";

export const addBooking = async (req, res) => {
    const { userName, phoneNo, passenger, vehicleName, pickupDate, days } = req.body;
    const dlImage = req.files?.dl?.[0];


    if (!userName || !phoneNo || !passenger || !vehicleName || !pickupDate || !days||!dlImage ) {
        return sendResponse(res, 400, false, "All fields including dl are required");
    }

    if (userName.length < 4) return sendResponse(res, 400, false, "Name should be at least 4 character");
    if (phoneNo.length < 10) return sendResponse(res, 400, false, "Phone number should be of 10 digits");
    if (passenger >= 10) return sendResponse(res, 400, false, "Passenger should be less than 10");

    try {
        const newBooking = await Booking.create({
            userName,
            phoneNo,
            passenger,
            vehicleName,
            pickupDate,
            days,
            dl: `/dl/${dlImage.filename}`
        });

        return sendResponse(res, 201, true, "Car booking added successfully", newBooking);
    } catch (error) {
        console.log(error.message)
        return sendResponse(res, 500, false, "Internal Server Error");
    }
};

export const showBooking = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = 5;
        const allBookings = await Booking.countDocuments();
        const booking = await Booking.find().skip((page - 1) * limit).limit(limit);

        return sendResponse(res, 200, true, "Data found successfully", {
            booking,
            allBookings,
            totalPages: Math.ceil(allBookings / limit),
            currentPage: page
        });
    } catch (error) {
        return sendResponse(res, 500, false, "Internal Server Error");
    }
};
