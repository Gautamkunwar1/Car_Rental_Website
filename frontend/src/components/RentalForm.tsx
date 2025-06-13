import  { type JSX } from "react";
import { Link } from "react-router-dom";
function RentalForm():JSX.Element {
    return (
        <>
            <div style={{ backgroundImage: `url(src/Images/toyota.jpg)`, opacity: 0.8 }} className="h-[100vh] bg-center bg-cover">
                <h1 className="text-center font-bold text-2xl py-1.5">Car Rental Reservation Form</h1>
                <form className="bg-[#74a5dd7a] w-[60%] mx-auto p-5 mt-4  shadow-2xl ">
                    <label htmlFor="fname"> Name :</label>
                    <div className="flex gap-6 mb-2">
                        <input type="text" name="fname" id="fname" placeholder="Enter first name" className="bg-white w-[50%] text-black p-1.5 outline-0" />
                        <input type="text" name="lname" id="lname" placeholder="Enter last name" className="bg-white w-[50%] text-black p-1.5 outline-0" />
                    </div>

                    <label htmlFor="phone">Phone Number:</label>
                    <input type="tel" name="phone" id="phone" className="bg-white w-full p-1.5 mb-2 text-black outline-0" placeholder="Enter your phone number" />

                    <label htmlFor="passenger">Number of Passengers:</label>
                    <input type="number" name="passenger" id="passenger" className="bg-white w-full p-1.5 mb-2 text-black outline-0" placeholder="Total passengers" />

                    <div className="flex gap-2 mb-2 pr-2 ">
                        <p>Vehicle Name : </p>
                        <label htmlFor="Suzuki">Maruti Suzuki</label>
                        <input type="radio" name="vehicleType" id="Coupe" />&nbsp;

                        <label htmlFor="Toyota"> Toyota Fortuner</label>
                        <input type="radio" name="vehicleType" id="Toyota" />&nbsp;

                        <label htmlFor="Bus"> Bus</label>
                        <input type="radio" name="vehicleType" id="bus" />&nbsp;
                    </div>

                    <label htmlFor=""> Pickup Date and Time:</label>
                    <div className="flex gap-6 mb-2">
                        <input type="date" name="fname" id="fname" className="bg-white w-[50%] p-1.5 text-black outline-0" />
                        <input type="time" name="lname" id="lname" className="bg-white w-[50%] p-1.5 text-black outline-0" />
                    </div>

                    <label htmlFor="days">For How many days do you need?</label>
                    <input type="number" name="days" id="days" className="w-full bg-white p-1.5 mb-3 text-black outline-0" placeholder="Total no. of days" />

                    <label htmlFor="dl">Upload DL:</label>
                    <input type="file" name="dl" className="p-1 mb-2 outline-0" /><br />

                    <div className="flex gap-2 pb-2"><input type="checkbox" /><p>I agree all term and condition</p></div>

                    <Link to={"/rentalCart"}>
                    <input type="submit" value="Submit" className="w-full bg-green-500 p-2 text-white font-bold hover:bg-green-700 cursor-pointer" />
                    </Link>
                </form>
            </div>
        </>
    )

}
export default RentalForm;