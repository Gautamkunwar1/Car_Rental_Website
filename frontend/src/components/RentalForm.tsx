import { useState, type JSX } from "react";
import { useNavigate } from "react-router-dom";
import { validateRentalForm, type Errors, type FormData as RentalFormData } from "../utils/rentalFormValidation";

function RentalForm(): JSX.Element {
    const [formData, setFormData] = useState<RentalFormData>({
        userName: "",
        lname: "",
        phoneNo: 0,
        passenger: 0,
        vehicleName: "",
        pickupDate: "",
        pickupTime: "",
        days: 0,
        dl: null,
        check: false,
    });

    const [errors, setErrors] = useState<Errors>({});
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type, files, checked } = e.target as HTMLInputElement;

        if (type === "file") {
            setFormData((prev) => ({ ...prev, [name]: files ? files[0] : null }));
        } else if (type === "checkbox") {
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();
        console.log("✅ handleSubmit triggered");
        const validateErrors = validateRentalForm(formData);
        setErrors(validateErrors);

        if (Object.keys(validateErrors).length === 0) {

            await addBooking(formData)
            setFormData({
                userName: "",
                lname: "",
                phoneNo: 0,
                passenger: 0,
                vehicleName: "",
                pickupDate: "",
                pickupTime: "",
                days: 0,
                dl: null,
                check: false,
            });

            // navigate("/rentalCart");
        }
    };

    const addBooking = async (formData: {
        userName: string;
        phoneNo: string;
        passenger: number;
        vehicleName: string;
        pickupDate: string;
        pickupTime: string;
        days: number;
        dl?: File; // optional file
    }): Promise<void> => {

        console.log(formData)
        try {
            const data = new FormData();
            console.log(formData.userName)
            data.append("userName", formData.userName);
            data.append("phoneNo", String(formData.phoneNo));
            data.append("passenger", String(formData.passenger));
            data.append("vehicleName", formData.vehicleName);
            data.append("pickupDate", formData.pickupDate);
            data.append("pickupTime", formData.pickupTime);
            data.append("days", String(formData.days));
            if (formData.dl) data.append("dl", formData.dl);

            const response = await fetch("/api/booking/addBooking", {
                method: "POST",
                body: data,
            });
            if (!response.ok) throw new Error("API fetch failed");

            const result = await response.json();
            console.log("Booking added successfully", result);
        } catch (error) {
            console.error("Error during add booking:", error);
        }
    };

    return (
        <div
            style={{ backgroundImage: `url(src/assets/toyota.jpg)` }}
            className="min-h-screen bg-center bg-cover text-white py-8 px-4 md:px-10"
        >
            <form
                className="bg-[#387dd1bd] max-w-4xl mx-auto p-6 shadow-2xl rounded"
                onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label htmlFor="userName">First Name:</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            placeholder="Enter first name"
                            className="bg-white w-full text-black p-2 rounded outline-0"
                        />
                        <span className="text-red-800">{errors.fname}</span>
                    </div>
                    <div>
                        <label htmlFor="lname">Last Name:</label>
                        <input
                            type="text"
                            name="lname"
                            id="lname"
                            value={formData.lname}
                            onChange={handleChange}
                            placeholder="Enter last name"
                            className="bg-white w-full text-black p-2 rounded outline-0"
                        />
                        <span className="text-red-800">{errors.lname}</span>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="phoneNo">Phone Number:</label>
                    <input
                        type="tel"
                        name="phoneNo"
                        id="phoneNo"
                        value={formData.phoneNo}
                        onChange={handleChange}
                        className="bg-white w-full p-2 text-black rounded outline-0"
                        placeholder="Enter your phone number"
                    />
                    <span className="text-red-800">{errors.phone}</span>
                </div>

                <div className="mb-4">
                    <label htmlFor="passenger">Number of Passengers:</label>
                    <input
                        type="number"
                        name="passenger"
                        id="passenger"
                        value={formData.passenger}
                        onChange={handleChange}
                        className="bg-white w-full p-2 text-black rounded outline-0"
                        placeholder="Total passengers"
                    />
                    <span className="text-red-800">{errors.passenger}</span>
                </div>

                <div className="mb-4">
                    <label htmlFor="vehicleName">Vehicle Name:</label>
                    <select
                        name="vehicleName"
                        id="vehicleName"
                        value={formData.vehicleName}
                        onChange={handleChange}
                        className="bg-white w-full text-black p-2 rounded outline-0"
                    >
                        <option value="">Choose Vehicle</option>
                        <option value="scorpio">Mahindra Scorpio</option>
                        <option value="creta">Hyundai Creta</option>
                        <option value="harrier">Tata Harrier</option>
                        <option value="thar">Mahindra Thar Rox</option>
                        <option value="swift">Maruti Suzuki Swift</option>
                        <option value="seltos">Kia Seltos</option>
                    </select>
                    <span className="text-red-800">{errors.vehicleName}</span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
                    <div>
                        <label htmlFor="pickupDate">Pickup Date:</label>
                        <input
                            type="date"
                            name="pickupDate"
                            id="pickupDate"
                            value={formData.pickupDate}
                            onChange={handleChange}
                            className="bg-white w-full text-black p-2 rounded outline-0"
                        />
                        <span className="text-red-800">{errors.pickupDate}</span>
                    </div>
                    <div>
                        <label htmlFor="pickupTime">Pickup Time:</label>
                        <input
                            type="time"
                            name="pickupTime"
                            id="pickupTime"
                            value={formData.pickupTime}
                            onChange={handleChange}
                            className="bg-white w-full text-black p-2 rounded outline-0"
                        />
                        <span className="text-red-800">{errors.pickupTime}</span>
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="days">For how many days do you need?</label>
                    <input
                        type="number"
                        name="days"
                        id="days"
                        value={formData.days}
                        onChange={handleChange}
                        className="bg-white w-full p-2 text-black rounded outline-0"
                        placeholder="Total number of days"
                    />
                    <span className="text-red-800">{errors.days}</span>
                </div>

                <div className="mb-4">
                    <label htmlFor="dl">Upload DL:</label>
                    <input
                        type="file"
                        name="dl"
                        onChange={handleChange}
                        className="bg-white p-2 text-black w-full rounded outline-0"
                    />
                    <span className="text-red-800">{errors.dl}</span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                    <input
                        type="checkbox"
                        id="check"
                        name="check"
                        checked={formData.check}
                        onChange={handleChange}
                    />
                    <label htmlFor="check">I agree to all terms and conditions</label>
                    <span className="text-red-800">{errors.check}</span>
                </div>

                <input
                    type="submit"
                    value="Submit"
                    className="bg-green-500 p-2 text-white font-bold hover:bg-green-700 cursor-pointer w-full rounded"
                />
            </form>
        </div>
    );
}

export default RentalForm;
