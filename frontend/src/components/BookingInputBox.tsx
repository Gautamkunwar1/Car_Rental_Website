import type { JSX } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function BookingInputBox():JSX.Element {
    return (
        <div className="h-36 mt-5 rounded-xl p-3 bg-[#746B6BC9] lg:w-[100%] max-[1000px]:w-[90%] max-[1000px]:h-[40%] max-[1000px]:mx-auto">
            <div>
                <p className="text-white text-lg pt-4">
                    Book a Car online now from worldwide locations. With over 20 years of experience in customer services, all we need is your ID, and you can book any car.
                </p>
                <div className="flex justify-around mt-4 min-[1180px]:gap-2 max-[1000px]:flex-col">
                    
                    {/* Location InputBox */}
                    <div className="bg-white flex justify-between items-center lg:pr-4 w-[30%] max-[1000px]:w-full max-[1000px]:mb-4 max-[1000px]:h-[40px]">
                        <input className="bg-white pl-2 outline-none" type="text" placeholder="Enter Your Location" />
                        <FaLocationDot />
                    </div>

                    {/* PickupDate InputBox */}
                    <div className="w-[30%] max-[1000px]:w-full max-[1000px]:mb-4 bg-white flex max-[1000px]:h-[40px]">
                        <input className=" w-[100%] pl-2 outline-none" type="date" />
                    </div>

                    {/* Dropoff Date InputBox */}
                    <div className="w-[30%] max-[1000px]:w-full max-[1000px]:mb-4 bg-white flex max-[1000px]:h-[40px]">
                        <input className="w-[100%] pl-2 outline-none" type="date" />
                    </div>

                    {/* Booking Button */}
                    <Link to="/login">
                        <button className="bg-blue-600 font-medium text-white p-2 max-[1500px]:hover:bg-cyan-400 cursor-pointer max-[1000px]:w-full">
                            Book Now
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    )
}
export default BookingInputBox;